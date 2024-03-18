'use client'

import Navigation from './Components/Navbar/Navigation';
import Image from '../../node_modules/next/image';
import NftPage from "@/app/nfts/page";
import {useAccount} from "wagmi";
import NftFilledComponent from './Components/Table/NftComponent/NftFilledComponent';
import { useState } from 'react';
import NftFlingComponent from './Components/Table/NftComponent/NftFling';

function App() {
    const [nftFilled, setNftFilled] = useState({
        id: 1,
        image: "/humping_images/Filled_Unicorn.png"
    });

    // Handle the case where the user is not connected
    const userAddress = useAccount().address;

    return (
        <div>
            <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh"
            }}>
                <Image
                    src="/background/background.png"
                    alt="Mountains with snow"
                    layout="fill"
                    objectFit='cover'
                />
            </div>
            <div>
                <Navigation />
            </div>
            <div className='flex flex-col justify-center items-center mt-6'>
                <h2 className={`flex justify-center border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-6xl font-text font-bold mt-4 mb-10`}>Foreplay</h2>

            </div>
            <div className='grid grid-cols-3 gap-1'>
                <div className='flex justify-center place-content-start col-span-2'>
                    { userAddress === undefined && <h2 className={`flex justify-center border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-4xl font-text font-bold mt-4 mb-10`}>Please connect your wallet</h2> }
                    { userAddress !== undefined && <NftPage />}
                </div>
                { userAddress !== undefined && 
                <div className='flex justify-center place-items-start mt-20'>
                    <div className='flex justify-center place-content-center w-8/12 rounded-3xl border-2 bg-[#6f84ef57]'>
                        <div className='flex-col w-full '>
                            <span className='flex justify-center font-text text-4xl my-6'>LAST FLING</span>
                            <NftFlingComponent userAddress={userAddress} key={nftFilled.id} id={nftFilled.id} image={nftFilled.image}/>
                        </div> 
                    </div>
                </div>
                    
                }
                
            </div>
           
        </div>
    )

}

export default App
