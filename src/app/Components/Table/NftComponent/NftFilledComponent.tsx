import React, { useContext, useState } from 'react';

export default function NftFilledComponent({ id,image }){
    return(
        <div className={` w-full h-80`}>
            <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1]  border-white border-2'>
                <div className=' w-full  h-full flex flex-col justify-center items-center '> 
                <img alt="nftImg" src={image} className="w-full h-60"/>                                                    
                </div>
            </div>               
        </div> 
    );
}