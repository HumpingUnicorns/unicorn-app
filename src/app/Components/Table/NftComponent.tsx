import React, { useContext } from 'react';

export default function NftComponent(props){
    return(
        <div className={`border-2  border-solid w-full h-48 border-[#414A78]`}>
            <div className='w-full h-full overflow-hidden bg-[#6e7cc46b]'>
                <div className=' w-full h-full flex flex-col justify-center items-center p-2'>
                <img alt="championImg" src={props.profileNft} className="w-3/4 rounded-2xl h-5/6 shadow-xl shadow-blue-800/50"/>
                <div className='p-2'>
                    <span className='text-grey-200 bg-pink-300 rounded-xl text-center font-text p-1  shadow-xl shadow-pink-800/50'>{props.favPosition}</span>
                </div>
                </div>
            </div>               
        </div>
    );
}