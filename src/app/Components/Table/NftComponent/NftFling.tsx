import React, { useContext, useState, useEffect } from 'react';
import { useAccount, useContractRead, useWriteContract } from "wagmi";
import abi from "src/app/abi.json";

export default function NftFlingComponent({ userAddress, id, image }){
    const { writeContract } = useWriteContract();
    const [nftData, setNftData] = useState<any>();


    //TODO Call le contrat pour connaitre le wallet qui pourra claim
    const {data, isSuccess} = 
        useContractRead({ 
            abi,
            address: process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT,
            functionName: 'lastFling',
        });
            
        useEffect(() => {  
            if(isSuccess){
                    setNftData(data);
                    
            } 
        }, [isSuccess, data]);

        async function claimNft(e: any){
            e.preventDefault();
            try {
                // Appel de la fonction du contrat
                await writeContract({ 
                    abi,
                    address: process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT,
                    functionName: 'getFlings',
                    args: [
                        userAddress
                    ],
                });
            } catch (error) {
                console.error('Erreur lors de l\'appel de la fonction unstakeMany :', error);
            } 
        }   

    return(
        <div className={`w-3/4 mx-auto`}>
            <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white'>
                <div className=' w-full  h-full flex flex-col justify-center items-center '>
                    <img alt="nftImg" src={image} className="w-full h-auto"/>
                    <hr className='w-full bg-white'></hr>
                    <div className='p-4'>
                        <span className='text-black bg-pink-300 rounded-xl text-center font-body text-2xl px-4 py-1 shadow-xl shadow-pink-800/50'>Pixie</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-6'>
            {isSuccess ?
            data[3] === userAddress ?
                data[4]===false ?
                    <button className='bg-[#414A78] p-2 border-2 border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] border-black font-text text-4xl mb-4 rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                        type="button"
                        style={{ boxShadow: "0 0.25rem 0 0 #000" }}
                        onClick={(e)=>claimNft(e)}>
                        CLAIM !
                    </button>
                    :
                     <button className='bg-[#414A78] p-2 border-2 border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] border-black font-body text-4xl mb-4 rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                     type="button"
                     style={{ boxShadow: "0 0.25rem 0 0 #000" }}>
                     Already Claimed !
                    </button>
                :
                <p className='font-body'>The last winner is : <span>{data[3].slice(0, 3)} ... {data[3].slice(data[3].length-3, data[3].length)}</span></p>
            
            :
            <div></div>
            }
            
           
            </div>                 
        </div> 
    );
}