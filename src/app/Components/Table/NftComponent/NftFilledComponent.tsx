import React, { useContext, useState } from 'react';

export default function NftFilledComponent({ id,image }){
    return(
        <div className={` w-full h-full `}>
        <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white'>
            <div className=' w-full  h-full flex flex-col justify-start items-center '>
        
            <img alt="nftImg" src={image} className="w-full h-auto	"/>
            <hr className='w-full bg-white'></hr>
            <div className='mt-4 mb-4'>
                <span className='w-full text-black bg-pink-300 rounded-xl text-center font-text lg:text-xs sm:text-xs px-4  shadow-xl shadow-pink-800/50'>?</span>
            </div>
            </div>
        </div>               
    </div> 
    );
}