
import { useWriteContract } from 'wagmi'
import abi from "src/app/abi.json";
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function StackingButton({isHumpingSelected, nftSelected, nbNftSelected} : any){
    const { writeContract } = useWriteContract({
    });
    const [styleButton, setStyle] = useState(true);

    const CONTRACT_ADDRESS = "0xaf23849c758773f3f761648bab9dcd851f6fec62";

    useEffect(()=>{
        if(nbNftSelected===0){
            setStyle({
                cursor: 'not-allowed',
                boxShadow: "0 0.25rem 0 0 #000"
            })
        }else{
            setStyle({
                cursor: 'pointer',
                boxShadow: "0 0.25rem 0 0 #000"
            })
        }
        console.log(styleButton);
        
    },[nbNftSelected])
        

    async function stakeMany(e: any, listOfId: any){
        e.preventDefault();
        const listIdTemp: any[] = listOfId.map(id => parseInt(id));
        try {
            // Appel de la fonction du contrat
            await writeContract({ 
                abi,
                address: CONTRACT_ADDRESS,
                functionName: 'stakeMany',
                args: [
                    listIdTemp
                ],
            });
        } catch (error) {
            console.error('Erreur lors de l\'appel de la fonction stakeMany :', error);
        } 
         console.log("good");
         
    }

    async function unstakeMany(e: any, listOfId: []){
        e.preventDefault();
        const listIdTemp: any[] = listOfId.map(id => parseInt(id));
        try {
            // Appel de la fonction du contrat
            await writeContract({ 
                abi,
                address: CONTRACT_ADDRESS,
                functionName: 'unstakeMany',
                args: [
                    listIdTemp
                ],
            });
        } catch (error) {
            console.error('Erreur lors de l\'appel de la fonction unstakeMany :', error);
        } 
    }   

    return (
        <>
            <div className={`flex flex-col justify-center `}>
                {!isHumpingSelected ? 
                <button className='bg-[#414A78] p-2 border-2 border-solid border-black font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                type="button"
                style={styleButton}
                onClick={(e)=>stakeMany(e, nftSelected)}
                disabled={nbNftSelected===0 ? true : false}
                >
                Stack
            </button>
            :
            <button className='bg-[#414A78] p-2 border-2 border-solid border-black font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                type="button"
                style={{ boxShadow: "0 0.25rem 0 0 #000", cursor: "pointer" }}
                onClick={(e)=>unstakeMany(e, nftSelected)}
                disabled={nbNftSelected===0 ? true : false}
                >
                    Unstack
                </button>
            } 
            </div>
        </>
       
    )
}