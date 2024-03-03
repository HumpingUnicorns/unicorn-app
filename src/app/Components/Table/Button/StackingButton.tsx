
import { useWriteContract } from 'wagmi'
import abi from "src/app/abi.json";

export default function StackingButton({isHumpingSelected, nftSelected} : any){
    const { writeContract } = useWriteContract();
    const CONTRACT_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

    function stakeMany(e: any, listOfId: []){
        e.preventDefault();
        writeContract({ 
            abi,
            address: CONTRACT_ADDRESS,
            functionName: 'stakeMany',
            args: [
              listOfId
            ],
         })
    }

    function unstakeMany(e: any, listOfId: []){
        e.preventDefault();
        writeContract({ 
            abi,
            address: CONTRACT_ADDRESS,
            functionName: 'unstakeMany',
            args: [
              listOfId
            ],
         })    
    }

    return (
        <div className={`flex flex-col justify-center `}>
            {!isHumpingSelected ? 
            <button className='bg-[#414A78] p-2 border-2 border-solid border-black font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
            type="button"
            style={{ boxShadow: "0 0.25rem 0 0 #000" }}
            onClick={(e)=>unstakeMany(e, nftSelected)}>
               Stack
           </button>
           :
           <button className='bg-[#414A78] p-2 border-2 border-solid border-black font-text text-4xl rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
             type="button"
             style={{ boxShadow: "0 0.25rem 0 0 #000" }}
             onClick={(e)=>stakeMany(e, nftSelected)}>
                Unstack
            </button>
        }
            
        </div>
    )
}