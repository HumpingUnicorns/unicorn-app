import { useAccount, useReadContracts, useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import abi from "../../../abi.json";
import abiNft from "../../../abiNft.json";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTransactionReceiptHook from './useTransactionReceiptHook';

interface Style {
    cursor: string;
    boxShadow: string;
}

export default function StackingButton({ isHumpingSelected, nftSelected, nbNftSelected }: any) {
    const { address: userAddress } = useAccount();
    const [styleButton, setStyle] = useState<Style>();
    const [isWriteEnabled, setIsWriteEnabled] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { writeContract, data, error, status } = useWriteContract();

    useEffect(() => {        
        if (data || error) {
          setIsWriteEnabled(false);
        }
      }, [data, error]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    const transactionSuccess = () => {
        Toast.fire({
            icon: 'success',
            title: 'Transaction successful'
        });
    };

    const dataApprove = useReadContracts({
        contracts: [{
            address: process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN as `0x${string}`,
            abi: abiNft,
            functionName: 'isApprovedForAll',
            args: [
                userAddress,
                process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT as `0x${string}`
            ],
        }]
    });

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      confirmations: 3,
      hash: data,
    });

    useEffect(() => {
        console.log(isConfirming);
        
        if (isConfirmed && isConfirming) {
            setIsSuccess(true);
        }
      }, [isConfirming, isConfirmed]);

    useEffect(() => {
        if (nbNftSelected === 0) {
            setStyle({
                cursor: "not-allowed",
                boxShadow: "0 0.25rem 0 0 rgba(255, 255, 255, 0)"
            });
        } else {
            setStyle({
                cursor: "pointer",
                boxShadow: "0 0.25rem 0 0 rgba(255, 255, 255, 0)"
            });
        }
    }, [nbNftSelected]);

    const handleStakeMany = async () => {
        if(dataApprove.data){
            if (dataApprove.data[0].result==="true") {
                handleTransaction(nftSelected, 'stakeMany');
            }else{
                //Si le user n'a pas encore approve ses NFT 
                    await writeContract({
                        abi,
                        address: process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN as `0x${string}`,
                        functionName: 'setApprovalForAll',
                        args: [
                                process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT,
                                true
                            ],
                    });    
                    //handleTransaction(nftSelected, 'stakeMany');                
                
            } 
        }   
    };
    
    const handleTransaction = async (listOfId: string[], functionName: string) => {
        setIsWriteEnabled(true);
        const listIdTemp = listOfId.map((id: string) => parseInt(id));
        try {
             await writeContract({
                abi,
                address: process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT as `0x${string}`,
                functionName: functionName,
                args: [listIdTemp],
            });
        } catch (error) {
            console.error(`Erreur lors de l'appel de la fonction ${functionName} :`, error);
        }
    };

    

    const handleUnstakeMany = () => {
        handleTransaction(nftSelected, 'unstakeMany');
    };

    return (
        <div className="flex flex-col justify-center">
            {!isHumpingSelected ?
                <button className="bg-[#414A78] p-2 border-2 border-solid border-white font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white"
                    type="button"
                    style={styleButton}
                    onClick={handleStakeMany}
                    disabled={nbNftSelected === 0 || isWriteEnabled}>
                    Stake
                </button>
                :
                <button className="bg-[#414A78] p-2 border-2 border-solid border-white font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white"
                    type="button"
                    style={styleButton}
                    onClick={handleUnstakeMany}
                    disabled={nbNftSelected === 0 || isWriteEnabled}>
                    Unstake
                </button>
            }
            {isSuccess && transactionSuccess()}
        </div>
    );
}
