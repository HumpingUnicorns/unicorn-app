'use client'

import Navigation from './Components/Navbar/Navigation';
import Image from '../../node_modules/next/image';
import NftPage from "@/app/nfts/page";
import {useAccount} from "wagmi";

function App() {

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
                    src="/background.png"
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
            <div className='flex justify-center place-content-start'>
                { userAddress === undefined && <h2 className={`flex justify-center border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-4xl font-text font-bold mt-4 mb-10`}>Please connect your wallet</h2> }
                { userAddress !== undefined && <NftPage />}
            </div>
        </div>
    )

}

export default App
