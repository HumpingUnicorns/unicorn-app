'use client'

import React, { useEffect, useState } from 'react';
import NftComponent from "@/app/Components/Table/NftComponent";
import NftFilledComponent from '@/app/Components/Table/NftFilledComponent';

export default function Table({nftData}: any) {

    const [isHumpingSelected, setIsHumpingSelected] = useState(true);
    const [nftSelected, setNftSelected] = useState([]);
    const [nftFilled, setNftFilled] = useState([]);

    const handleAddObjectToList = (nft) => {
        setNftSelected([...nftSelected, nft]);
    };

    // Remove object from list by index
    const handleRemoveObjectToList = (indexToRemoveId: Number) => {
        const updatedNftSelected = nftSelected.filter((nft: any) => nft.id !== indexToRemoveId);
        console.log('Remove object from list: ', updatedNftSelected);
        setNftSelected(updatedNftSelected);
    }

    // Utilisez un effet pour remplir nftFilled une seule fois
    useEffect(() => {
        // If nftData is less than 6, fill the rest with empty nfts
        if (nftData.length < 6) {
            const additionalNftCount = 6 - nftData.length;
            const filledNfts = [];
            for (let i = 0; i < additionalNftCount; i++) {
                filledNfts.push({
                    id: i,
                    image: "./Filled_Unicorn.png"
                });
            }
            setNftFilled(filledNfts);
        }
    }, []);

    function handleIsHumpingSelected() {
        setIsHumpingSelected(true);
    }

    function handleIsNotHumpingSelected() {
        setIsHumpingSelected(false);
    }

    return (
        <div className="">
            {isHumpingSelected ?
                <div className=''>
                    <div className='content-center place-items-end justify-end w-full grid grid-cols-2'>
                        <div className='place-self-center'>
                            <img alt='Humping tab' src='/Humping.png' onClick={handleIsHumpingSelected}
                                 className="bg-[#414A78] rounded-t-xl w-full h-full transition duration-500 hover:opacity-90"/>
                        </div>
                        <div className=''>
                            <img alt='Not Humping tab' src='/Not_Humping_Not_selected.png' onClick={handleIsNotHumpingSelected}
                                 className="rounded-t-xl w-11/12 h-full transition duration-500 hover:opacity-90"/>
                        </div>
                    </div>
                    <div className='border-2 rounded-3xl bg-[#6f84ef57]'>
                        <div className="grid content-center w-full">
                            <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                {nftData !== undefined && nftData.length > 0 &&
                                    nftData.map((nft: any) => {
                                        return <NftComponent key={nft.id} id={nft.id} profileNft={nft.metadata.image}
                                                             favPosition={nft.metadata.attributes[1].value}
                                                             handleAddObjectToList={handleAddObjectToList}
                                                             handleRemoveObjectToList={handleRemoveObjectToList}
                                                             nft={nft}/>
                                    })}
                                {
                                    nftFilled.map(nft => {
                                        return (
                                            <NftFilledComponent key={nft.id} id={nft.id} image={nft.image}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className=''>
                    <div className='content-center place-items-end justify-end w-full grid grid-cols-2'>
                        <div className='border-[#414A78] place-self-center'>
                            <img src='/Humping_Not_selected.png' onClick={handleIsHumpingSelected}
                                 className="bg-[#414A78] rounded-t-xl text-3xl w-11/12 h-full transition duration-500 hover:opacity-90"/>
                        </div>
                        <div className=''>
                            <img src='/Not_Humping.png' onClick={handleIsNotHumpingSelected}
                                 className="rounded-t-xl text-3xl w-10/12 h-full transition duration-500 hover:opacity-90"/>
                        </div>
                    </div>
                    <div className='border-2 rounded-3xl bg-[#6f84ef57]'>
                        <div className="grid content-center w-full">
                            <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                {nftData.map((nft: any) => {
                                    return <NftComponent key={nft.id} id={nft.id} profileNft={nft.metadata.image} favPosition={nft.metadata.attributes[1].value} handleAddObjectToList={handleAddObjectToList} handleRemoveObjectToList={handleRemoveObjectToList} nft={nft} />
                                })}
                                {
                                    nftFilled.map((nft: any) => {
                                        return (
                                            <NftFilledComponent key={nft.id} id={nft.id} image={nft.image} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}