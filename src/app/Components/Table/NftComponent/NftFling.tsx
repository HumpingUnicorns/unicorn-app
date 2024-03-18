import React, { useContext, useState, useEffect } from 'react';
import { useAccount, useContractRead, useWriteContract } from "wagmi";
import abi from "src/app/abi.json";

export default function NftFlingComponent({ userAddress, id, image }){
    const { writeContract } = useWriteContract();
    const [nftData, setNftData] = useState<any>();

    const MOCK_CONTRACT_ADDRESS = "0xAF23849c758773F3F761648BaB9dcd851f6Fec62";

    //TODO Call le contrat pour connaitre le wallet qui pourra claim
    const {data, isSuccess} = 
        useContractRead({ 
            abi,
            address: MOCK_CONTRACT_ADDRESS,
            functionName: 'lastFling',
        });
    
        console.log(data);
        
        useEffect(() => {  
            if(isSuccess){
                    setNftData(data);
                    console.log(data);
                    
            } 
        }, [isSuccess, data]);

        async function claimNft(e: any){
            e.preventDefault();
            try {
                // Appel de la fonction du contrat
                await writeContract({ 
                    abi,
                    address: MOCK_CONTRACT_ADDRESS,
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
                    <img alt="nftImg" src={image} className="w-full h-64"/>
                    <hr className='w-full bg-white'></hr>
                    <div className='p-2'>
                        <span className='text-grey-200 bg-pink-300 rounded-xl text-center font-text text-3xl p-1 shadow-xl shadow-pink-800/50'>Pixie</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-6'>
            {isSuccess ?
            data[3] === userAddress ?
                data[4]===false ?
                    <button className='bg-[#414A78] p-2 border-2 border-solid border-black font-text text-4xl mb-4 rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                        type="button"
                        style={{ boxShadow: "0 0.25rem 0 0 #000" }}
                        onClick={(e)=>claimNft(e)}>
                        CLAIM !
                    </button>
                    :
                     <button className='bg-[#414A78] p-2 border-2 border-solid border-black font-text text-4xl mb-4 rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                     type="button"
                     style={{ boxShadow: "0 0.25rem 0 0 #000" }}>
                     Already Claimed !
                    </button>
                :
                <p>The last winner is : {data[3]}</p>
            
            :
            <div></div>
            }
            
           
            </div>                 
        </div> 
    );
}