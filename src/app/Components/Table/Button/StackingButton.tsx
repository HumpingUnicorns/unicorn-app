import { useAccount, useReadContracts, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import abi from "../../../abi.json";
import abiNft from "../../../abiNft.json";
import { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
import TwitterIntent from '../../utils/Twitter/TwitterIntent';
import Swal from 'sweetalert2';
import { WriteContractReturnType } from 'wagmi/actions';

interface Style {
    cursor: string;
    boxShadow: string;
}

export default function StackingButton({ isHumpingSelected, nftSelected, nbNftSelected, handleStakeData, handleUnstakeData }: any) {
    const { address: userAddress } = useAccount();
    const [styleButton, setStyle] = useState<Style>();
    const [isWriteEnabled, setIsWriteEnabled] = useState(false);
    const [stackingAvailable, setStackingAvailable] = useState(false);
    const [showTwitterModal, setShowTwitterModal] = useState<Boolean>(false);

    const { writeContract, data, error, status } = useWriteContract();
    let approvalData: WriteContractReturnType | undefined;
    
    useEffect(() => {        
        if (data || error) {
          setIsWriteEnabled(false);
        }
      }, [data, error]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
    });

    const toggleShowTwitterModal = () => {
        setShowTwitterModal((current) => !current);
        
      }


    const transactionSuccess = () => {
        if( data != approvalData ) {
            if( isHumpingSelected ) {
                handleUnstakeData(nftSelected);
            } else {
                handleStakeData(nftSelected);
                toggleShowTwitterModal();
            }    
        }
        Toast.fire({
            icon: 'success',
            title: 'Transaction successful',
            timer: 2000
        });
    };

    const transactionPending = () => {
        Toast.fire({
            icon: 'info',
            title: 'Transaction Received'
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
        if(isConfirming){
            transactionPending()
        }
        if (isConfirmed) {
            transactionSuccess()
        }
      }, [isConfirming, isConfirmed]);

      useEffect(() => {               
        if (dataApprove.data?.[0].result===true || data) {            
            setStackingAvailable(true);
        }
      }, [data, dataApprove]);

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

    const handleApproveAll = async () => {
        await writeContract({
            abi: abiNft,
            address: process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN as `0x${string}`,
            functionName: 'setApprovalForAll',
            args: [
                    process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT,
                    true
                ],
        });
        approvalData = data; 
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

    const handleStakeMany = () => {
        handleTransaction(nftSelected, 'stakeMany');
    };

    return (
        <div className="flex flex-col justify-center">
            {!stackingAvailable ?
                <button className="bg-[#414A78] p-2 border-2 border-solid border-white text-[#f3f3f3] font-text text-2xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white"
                    type="button"
                    onClick={handleApproveAll}>
                    Approve NFT
                </button>
            :
                !isHumpingSelected ?
                    <button className="bg-[#414A78] p-2 border-2 border-solid border-white text-[#f3f3f3] font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white"
                        type="button"
                        style={styleButton}
                        onClick={handleStakeMany}
                        disabled={nbNftSelected === 0 || isWriteEnabled}>
                        STAKE
                    </button>
                    :
                    <button className="bg-[#414A78] p-2 border-2 border-solid border-white text-[#f3f3f3] font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white"
                        type="button"
                        style={styleButton}
                        onClick={handleUnstakeMany}
                        disabled={nbNftSelected === 0 || isWriteEnabled}>
                        UNSTAKE<br />
                        <span className="text-3xl">(pull out)</span>
                    </button>
                }
            {showTwitterModal && <Modal
            content={<>
                <TwitterIntent/>
            </>}
            handleClose={toggleShowTwitterModal}
        />}

        </div>
    );
}
