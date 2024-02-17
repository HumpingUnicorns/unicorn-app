import React, { useState } from 'react';
import Image from "next/image";
import NftComponent from "./NftComponent";

export default function Table() {
    const [isHumpingSelected, setIsHumpingSelected] = useState(true);
    const nft = {
    "name": "Humpy D. Luffy",
    "description": "Custom unicorn signifying Top Gun Hatch's entry to the Hump Club",

    "image": "https://ipfs.io/ipfs/QmdH35eydDNuZzCPeWCt2KsF5xue6P4RkJtP4gzYoUx5qp",
    "attributes": [
      {
        "trait_type": "Created With",
        "value": "Top Gun Hatch"
      },
      {
        "trait_type": "Favourite Position",
        "value": "O's in the Ocean"
      }
    ],
    "compiler": "Handsome, hilarious and clever dev, Smitty",
    "isStacking": true
    }
    const tabNft = [nft, nft,nft,nft,nft,nft,nft,nft,nft,nft,nft,nft,];

    function handleIsHumpingSelected(){
        setIsHumpingSelected(true);
    }

    function handleIsNotHumpingSelected(){
        setIsHumpingSelected(false);
    }

    return(
        <div className="">
            <div className="h-screen" style={{ backgroundImage: "url('/Mansion.webp')", backgroundSize: "100% 100%"}}>
                <div className='h-5/6 flex justify-center items-start'>
                    {isHumpingSelected ?
                    <div className=''>
                        <div className='content-center w-full grid grid-cols-2 mt-56 xl:mt-40'>
                            <div className='border-t-2 border-l-2 border-r-2 border-b-2  border-[#414A78] rounded-t-3xl bg-white'>
                                <img src='/Humping_selected.webp' onClick={handleIsNotHumpingSelected} className="rounded-t-3xl text-3xl w-full h-full transition duration-500 hover:scale-y-90" />
                            </div>
                            <div className='border-t-2 border-l-2 border-r-2 border-b-2  border-[#414A78] rounded-t-3xl bg-white'>
                                <img src='/No_Humping_selected.jpeg' onClick={handleIsHumpingSelected} className="rounded-t-3xl text-3xl w-full h-full transition duration-500 hover:scale-y-90" />
                            </div>
                        </div>
                            
                        <div className="grid content-center w-full ">
                            <div className={`grid h-full grid-cols-pannel`}>
                                {tabNft.map(nft=>{
                                        return <NftComponent key={nft.name}  profileNft={nft.image} favPosition={nft.attributes[1].value} />
                                    })}
                            </div>                        
                        </div>
                    </div>
                    
                    :
                    <div className=''>
                        <div className='content-center w-full grid grid-cols-2 mt-56 xl:mt-40'>
                            <div className='border-t-2 border-l-2 border-r-2 border-b-2  border-[#414A78] rounded-t-3xl bg-white'>
                                <img src='/Humping_selected.webp' onClick={handleIsNotHumpingSelected} className="rounded-t-3xl text-3xl w-full h-full transition duration-500 hover:scale-y-90" />
                            </div>
                            <div className='border-t-2 border-l-2 border-r-2 border-b-2  border-[#414A78] rounded-t-3xl bg-white'>
                                <img src='/No_Humping_selected.jpeg' onClick={handleIsHumpingSelected} className="rounded-t-3xl text-3xl w-full h-full transition duration-500 hover:scale-y-90" />
                            </div>
                        </div>
                            
                        <div className="grid content-center w-full ">
                            <div className={`grid h-full grid-cols-pannel`}>
                                {tabNft.map(nft=>{
                                        return <NftComponent key={nft.name}  profileNft={nft.image} favPosition={nft.attributes[1].value} />
                                    })}
                            </div>                        
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
        
    )
}