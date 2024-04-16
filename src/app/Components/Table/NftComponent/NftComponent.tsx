import React, { useEffect, useState } from 'react';

export default function NftComponent({ id, profileNft, nftTokenId, favPosition, handleAddTokenIdToList, handleRemoveTokenIdToList, isChange }: any){
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(false);
    }, [isChange]);

    function handleIsSelected(event:Event){
        setIsSelected(!isSelected);
        if(!isSelected){
            handleAddTokenIdToList(nftTokenId);            
        }else{
            handleRemoveTokenIdToList(nftTokenId);
        }
    }

    return(
        <button onClick={event=>handleIsSelected(event)} >
            {
            !isSelected ?
            <div className={` w-full h-full `}>
                <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white'>
                    <div className=' w-full  h-full flex flex-col justify-start items-center '>
                
                    <img alt="nftImg" src={profileNft} className="w-full h-auto"/>
                    <hr className='w-full bg-white'></hr>
                    <div className='mt-4 mb-4 w-full'>
                        <span className='w-full text-black bg-pink-300 rounded-xl text-center font-body lg:text-xs sm:text-xs md:text-xxs p-1  shadow-xl shadow-pink-800/50'>{favPosition}</span>
                    </div>
                    </div>
                </div>               
            </div> 
            :
            <div className={` w-full h-full opacity-70`}>
                <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white'>
                    <div className=' w-full  h-full flex flex-col justify-start items-center '>
                
                    <img alt="nftImg" src={profileNft} className="w-full h-auto"/>
                    <hr className='w-full bg-white'></hr>
                    <div className='mt-4 mb-4 w-full'>
                        <span className='w-full bg-pink-300 text-black rounded-xl text-center font-body md:text-xxs lg:text-xs sm:text-xs p-1  shadow-xl shadow-pink-800/50'>{favPosition}</span>
                    </div>
                    </div>
                </div>               
            </div> 
            }
             
           
              
        </button>
        
    );
}