type NftFilled = {
    id: number,
    image:string
}
export default function NftFilledComponent({ id,image } : NftFilled){
    return(
        <div className={` w-full h-full `}>
        <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white rounded-xl'>
            <div className=' w-full  h-full flex flex-col justify-start items-center '>
        
            <img alt="nftImg" src={image} className="w-full h-auto	"/>
            <hr className='w-full bg-white'></hr>
            <div className="w-full mt-1 mb-1 flex justify-center items-center text-white font-bold font-text lg:text-base sm:text-sm md:text-xxs">NAME
        
            </div>
            <div className='w-full mt-1 mb-2'>
                <span className='w-full text-pink-200 text-center font-body lg:text-sm sm:text-sm px-4' style={{ borderTop: '0.5px solid white', display: 'block', padding: '8px 0' }}>FAVE POSITION: ?</span>
            </div>
            </div>
        </div>               
    </div> 
    );
}