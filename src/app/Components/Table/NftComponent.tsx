import React, { useState } from 'react';

export default function NftComponent({ id, profileNft, favPosition, handleAddObjectToList, handleRemoveObjectToList, nft }: any){
    const [isSelected, setIsSelected] = useState(false);

    function handleIsSelected(event:Event){
        setIsSelected(!isSelected);
        if(isSelected){
            handleAddObjectToList(nft);            
        }else{
            handleRemoveObjectToList(id);
        }
    }

    return(
        <button onClick={event=>handleIsSelected(event)} >
            {
            !isSelected ?
            <div className={` w-full h-80 `}>
                <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white'>
                    <div className=' w-full  h-full flex flex-col justify-center items-center '>
                
                    <img alt="nftImg" src={profileNft} className="w-full h-64"/>
                    <hr className='w-full bg-white'></hr>
                    <div className='p-4'>
                        <span className='text-grey-200 bg-pink-300 rounded-xl text-center font-text text-3xl p-1  shadow-xl shadow-pink-800/50'>{favPosition}</span>
                    </div>
                    </div>
                </div>               
            </div> 
            :
            <div className={` w-full h-80 opacity-70`}>
                <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white'>
                    <div className=' w-full  h-full flex flex-col justify-center items-center '>
                
                    <img alt="nftImg" src={profileNft} className="w-full h-64"/>
                    <hr className='w-full bg-white'></hr>
                    <div className='p-4'>
                        <span className='text-grey-200 bg-pink-300 rounded-xl text-center font-text text-3xl p-1  shadow-xl shadow-pink-800/50'>{favPosition}</span>
                    </div>
                    </div>
                </div>               
            </div> 
            }
             
           
              
        </button>
        
    );
}