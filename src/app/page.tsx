'use client'

import Navigation from './Components/Navbar/Navigation';
import Image from '../../node_modules/next/image';
import NftPage from "@/app/Components/Nfts/page";
import {useAccount, useChains} from "wagmi";
import NftFilledComponent from './Components/Table/NftComponent/NftFilledComponent';
import { useState } from 'react';

function App() {
    // Handle the case where the user is not connected
    const userAddress = useAccount().address;
    const userChain = useAccount().chainId;
    const chains = useChains();
     

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image  width={200}
                    height={120}
                    style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}
                    src="/humping_images/Hump_House.png"
                    alt="title"
                />
            </div>
            <div className='flex justify-center'>
                    { userAddress !== undefined && userChain!==chains[0].id && 
                            <div className='flex-col justify-center'>
                                <p className='flex justify-center font-text text-2xl md:text-4xl font-extrabold italic '>You're trying to hump on the wrong chain!</p>
                                <div className='flex justify-center'>
                                <Image alt="Logo"
                                width={160}
                                height={40}
                                className="relative" src='/humping_images/Wrong_Network_Unicorn.png'>
                                </Image>
                                </div>
                               
                                
                            </div>
                    }
                    { userAddress === undefined && 
                    <div>
                        <h2 className={`flex justify-center border-solid text-[#f3f3f3] text-4xl font-text font-bold mt-4 mb-10`}>Please connect your wallet</h2>
                        <div className='flex justify-center'>
                                <Image alt="Logo"
                                width={160}
                                height={40}
                                className="relative" src='/humping_images/Please_Connect_Your_Wallet_Unicorn.png'>
                                </Image>
                                </div>
                        </div> }
            </div>
              { userAddress !== undefined && userChain===chains[0].id && <NftPage />}
                    
        </div>
    )

}

export default App
