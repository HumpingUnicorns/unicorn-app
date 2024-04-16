
import { useAccount, useReadContracts } from 'wagmi'
import { simulateContract, writeContract, waitForTransactionReceipt } from '@wagmi/core'

import abi from "src/app/abi.json";
import abiNft from "src/app/abiNft.json";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { config } from 'src/wagmi.ts'

export default function StackingButton({isHumpingSelected, nftSelected, nbNftSelected} : any){
 
    const userAddress = useAccount().address;
    const [styleButton, setStyle] = useState();
    const [stakingTransactionStatus, setStakingTransactionStatus] = useState(false);
    const [unstakingTransactionStatus, setUnstakingTransactionStatus] = useState(false);
    const [transactionReceipt, setTransactionReicept] = useState(false);
    

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

       //Pop up informative
    const transactionSuccess = () => {
        Toast.fire({
            icon: 'success',
            title: 'Transaction successfull'
          })
    }

    const transactionReceipted = () => {
        Toast.fire({
            icon: 'info',
            title: 'Transaction receipted'
          })
    }

    const data = 
    useReadContracts({ 
        contracts: [{
            address: process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN,
            abi: abiNft,
            functionName: 'isApprovedForAll',
            args: [
              userAddress,
              process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN
          ],
        }]
    });

    useEffect(()=>{
        if(nbNftSelected===0){
            setStyle({
                cursor: 'not-allowed',
                boxShadow: "0 0.25rem 0 0 rgba(255, 255, 255, 0)"
            })
        }else{
            setStyle({
                cursor: 'pointer',
                boxShadow: "0 0.25rem 0 0 rgba(255, 255, 255, 0)"
            })
        }        
    },[nbNftSelected])

    useEffect(()=>{
       setStakingTransactionStatus(false);
       setUnstakingTransactionStatus(false);
    },[stakingTransactionStatus, unstakingTransactionStatus])
        
    async function stakeManyFunction(listOfId: any){
        const listIdTemp: any[] = listOfId.map(id => parseInt(id));
        try {
            // Appel de la fonction du contrat
            const { request } = await simulateContract(config , { 
                abi,
                address: process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT,
                functionName: 'stakeMany',
                args: [
                    listIdTemp
                ],
            });
            const hash = await writeContract(config, request)
            const transactionReceipt = await waitForTransactionReceipt(config, {
                confirmations: 3, 
                hash: hash,
              });
            

            if(transactionReceipt.status==="success"){
                setStakingTransactionStatus(true);
            }
        } catch (error) {
            console.error('Erreur lors de l\'appel de la fonction stakeMany :', error);
        } 
    }

    async function stakeMany(e: any, listOfId: any){
        e.preventDefault();
        if(data.result){
           stakeManyFunction(listOfId);
        }else{
            try {
              
            } catch (error) {
                console.error('Erreur lors de l\'appel de la fonction stakeMany :', error);
            }
            stakeManyFunction(listOfId);
        }         
    }

    async function unstakeMany(e: any, listOfId: []){
        e.preventDefault();
        const listIdTemp: any[] = listOfId.map(id => parseInt(id));
        try {
            // Appel de la fonction du contrat
            const { request } = await simulateContract(config , { 
                abi,
                address: process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT,
                functionName: 'unstakeMany',
                args: [
                    listIdTemp
                ],
            });
            const hash = await writeContract(config, request)
            
            const transactionReceipt = await waitForTransactionReceipt(config, {
                confirmations: 3, 
                hash: hash,
              });
            if(transactionReceipt.status==="success"){
                setUnstakingTransactionStatus(true);
            }              
        } catch (error) {
            console.error('Erreur lors de l\'appel de la fonction unstakeMany :', error);
        } 
    }   

    return (
        <>
            <div className={`flex flex-col justify-center `}>
                {!isHumpingSelected ? 
                <button className='bg-[#414A78] p-2 border-2 border-solid border-white font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white'
                type="button"
                style={styleButton}
                onClick={(e)=>stakeMany(e, nftSelected)}
                disabled={nbNftSelected===0 ? true : false}
                >
                Stake
            </button>
            :
            <button className='bg-[#414A78] p-2 border-2 border-solid border-white font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-white'
                type="button"
                style={styleButton}
                onClick={(e)=>unstakeMany(e, nftSelected)}
                disabled={nbNftSelected===0 ? true : false}
                >
                    Staked
                </button>
            } 
            {stakingTransactionStatus ? transactionSuccess() : <></>}
            {unstakingTransactionStatus ? transactionSuccess() : <></>}
            </div>
        </>
       
    )
}