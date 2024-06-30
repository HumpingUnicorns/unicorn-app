'use client'

export default function TableNoNft() {

    return (
        <>
        <div className="w-full flex justify-center items-center ml-6">
            <div className='w-10/12 text-[#f3f3f3] text-4xl font-text font-bold'>
                <div className="flex-col justify-center place-items-center gap-4 mr-6">
                    <h2 className={`text-center text-[#f3f3f3] text-sm md:text-xl lg:text-2xl xl:text-4xl font-text font-bold mt-4 mb-4`}>NO UNICORNS?! </h2>
                    <div className="flex justify-center">
                    <a className={` w-2/12 mb-2 text-center border-4 font-text text-xl md:text-3xl bg-pink-400 p-2 border-white rounded-md hover:bg-pink-500`} target="_blank" href={`https://joepegs.com/collections/avalanche/humping-unicorns`}>BUY</a>
                    </div>

                
                </div>
                
                <div className="flex justify-center">
                    <img
                    className="w-2/12 h-full"
                    src={"humping_images/No_Humpers_Unicorn.png"}
                
                    />
                </div>
            </div>
        </div>
           
        </>
    )

}