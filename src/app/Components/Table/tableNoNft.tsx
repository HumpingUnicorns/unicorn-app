'use client'
import Image from "next/image";

export default function TableNoNft() {

    return (
        <>
        <div className="w-full flex justify-center items-center">
            <div className='w-4/12 border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-4xl font-text font-bold'>
                <h2 className={`border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-4xl font-text font-bold mt-4 mb-4`}>You don't have NFT in your account</h2>
                <h5 className="flex items-center content-center">Join the unicorn fields !<a className={`ml-2 border-4 bg-pink-400 p-4 border-neutral-950 rounded-full hover:bg-pink-500`} target="_blank" href={`https://avax.hyperspace.xyz/collection/avax/e54c4435-5693-482d-a153-80baaae7e213`}>Buy here</a></h5>
                <img
                className="mx-auto"
                src={"/No_Humpers_Unicorn.png"}
               
                 />
            </div>
        </div>
           
        </>
    )

}