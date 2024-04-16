import { useEffect, useState } from "react";
import StackingButton from "../Button/StackingButton";

const calculateTimeRemaining = () => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(0, 0, 0, 0);
    target.setDate(target.getDate() + (3 + 7 - target.getUTCDay()) % 7); // next wednesday

    const timeRemaining = target.getTime() - now.getTime();
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return { days };
};

export default function TotalHumping({isHumpingSelected, totalNft, totalNftStacked, nftSelected, nbNftSelected} : any){  
    
    
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
            <div
                className="grid grid-rows-1 grid-cols-3 gap-1 place-items-center  w-full text-2xl font-text font-black uppercase mt-4 ">
                <div style={{ borderRadius: 600 }}
                    className={`flex flex-col justify-center pl-2 pr-2 pt-6 pb-6 w-3/5 text-white border-4 border-white bg-[#414A78] shadow-2xl shadow-[#414A78] opacity-90`}>
                    {isHumpingSelected ?
                     <p className={`flex justify-center w-full font-spegiel text-xs sm:text-base md:text-xs lg:text-lg xl:text-xl`}>
                     NFT Staked</p> 
                    :
                     <p className={`flex justify-center w-full font-spegiel text-xs sm:text-base md:text-xs lg:text-lg xl:text-xl`}>Total
                     NFT</p> 
                    }
                    <h2 className={`flex justify-center w-full font-body text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl`}>{isHumpingSelected ? totalNftStacked : totalNft}</h2>
                </div>
                <div>
                <StackingButton isHumpingSelected={isHumpingSelected} nftSelected={nftSelected} nbNftSelected={nbNftSelected}/>
                </div>
                <div style={{ borderRadius: 600 }}
                    className={`flex flex-col justify-center pl-2 pr-2 pt-6 pb-6 w-3/5 text-white border-4 border-white bg-[#414A78] shadow-2xl shadow-[#414A78] opacity-90`}>
                    <p className={`flex justify-center w-full font-spegiel text-xs sm:text-base md:text-xs lg:text-lg xl:text-xl`}>Next
                        Fling</p>
                    <h2 className={`flex justify-center w-full font-body text-xs sm:text-sm md:text-xs lg:text-lg xl:text-xl`}> 
                    <div className="">
                        <p>Days: {timeRemaining.days}</p>
                    </div>
                    </h2>
                </div>
            </div>
    )
}