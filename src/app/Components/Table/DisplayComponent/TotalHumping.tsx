import StackingButton from "../Button/StackingButton";

export default function TotalHumping({isHumpingSelected, totalNft, nftSelected} : any){

    return (
            <div
                className="grid grid-rows-1 grid-cols-3 gap-1 place-items-center  w-full text-2xl font-text font-black uppercase mt-4">
                <div style={{ borderRadius: 600 }}
                    className={`flex flex-col justify-center pl-2 pr-2 pt-6 pb-6 w-3/5 text-white border-4 border-[#F880C2] bg-[#414A78] shadow-2xl shadow-[#414A78]`}>
                    <p className={`flex justify-center w-full font-spegiel  text-xxs md:text-sm lg:text-xl xl:text-2xl`}>Total
                        humping</p>
                    <h2 className={`flex justify-center w-full font-texxt text-base md:text-sm lg:text-base xl:text-4xl`}>{totalNft}</h2>
                </div>
                <div>
                <StackingButton isHumpingSelected={isHumpingSelected} nftSelected={nftSelected}/>
                </div>
                <div style={{ borderRadius: 600 }}
                    className={`flex flex-col justify-center pl-2 pr-2 pt-6 pb-6 w-3/5 text-white border-4 border-[#F880C2] bg-[#414A78] shadow-2xl shadow-[#414A78]`}>
                    <p className={`flex justify-center w-full font-spegiel  text-xxs md:text-sm lg:text-xl xl:text-2xl`}>Day
                        until</p>
                    <h2 className={`flex justify-center w-full font-texxt text-base md:text-sm lg:text-base xl:text-4xl`}>5</h2>
                </div>
            </div>
    )
}