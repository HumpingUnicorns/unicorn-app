'use client'

import Navigation from './Components/Navbar/Navigation';
import Image from '../../node_modules/next/image';
import NftPage from "@/app/nfts/page";
import {useAccount, useChains} from "wagmi";
import NftFilledComponent from './Components/Table/NftComponent/NftFilledComponent';
import { useState } from 'react';

function App() {
    //En attendant de call le contract pour recuperer l'nft à gagner
    const [nftFilled, setNftFilled] = useState({
        id: 1,
        image: "/humping_images/Filled_Unicorn.png"
    });

    // Handle the case where the user is not connected
    const userAddress = useAccount().address;
    const userChain = useAccount().chainId;
    const chains = useChains();
    console.log(useAccount());
    console.log(userChain);
    console.log(chains[0].id);

    

    return (
        <div>
            <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh"
            }}>
                <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src="/background/Hump_House_Background.mp4" type="video/mp4" />
                </video>

            </div>
            <div>
                <Navigation />
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image  width={200}
                    height={120}
                    style={{display: 'flex', position: 'justify-center', marginBottom: '30px'}}
                    src="/humping_images/Hump_House.png"
                    alt="title"
                />
            </div>
            <div className='flex justify-center'>
                    { userAddress !== undefined && userChain!==chains[0].id && 
                            <div className='flex-col justify-center'>
                                <p className='flex justify-center font-text text-2xl md:text-4xl font-extrabold italic drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Your are on the wrong chain !</p>
                                <div className='flex justify-center'>
                                <Image alt="Logo"
                                width={160}
                                height={40}
                                className="relative" src='/humping_images/Wrong_Network_Unicorn.png'>
                                </Image>
                                </div>
                               
                                
                            </div>
                    }
                    { userAddress === undefined && <h2 className={`flex justify-center border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-4xl font-text font-bold mt-4 mb-10`}>Please connect your wallet</h2> }
            </div>
           
            
            
                    { userAddress !== undefined && userChain===chains[0].id && <NftPage />}
        </div>
    )

}

export default App
