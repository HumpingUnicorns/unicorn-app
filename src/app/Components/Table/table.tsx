'use client'

import React, { useEffect, useState } from 'react';
import NftComponent from "@/app/Components/Table/NftComponent/NftComponent";
import NftFilledComponent from '@/app/Components/Table/NftComponent/NftFilledComponent';
import TotalHumping from './DisplayComponent/TotalHumping';

export default function Table({nftData}: any) {

    const [isHumpingSelected, setIsHumpingSelected] = useState(true);
    const [isChange, setIsChange] = useState(false);
    const [nftSelected, setNftSelected] = useState<any>([]);
    const [nftFilled, setNftFilled] = useState<any>([]);

    async function handleAddTokenIdToList(tokenId : Number){
        const tmpNftSelectedList = nftSelected;
        tmpNftSelectedList.push(tokenId);
        setNftSelected(tmpNftSelectedList);
        console.log('new list : ', nftSelected);  
    };

    // Remove object from list by index
    function handleRemoveTokenIdToList(tokenIdToRemoved: Number){
        const updatedNftSelected = nftSelected.filter((itemTokenId: Number) => itemTokenId !== tokenIdToRemoved);
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
        setIsChange(true);
        setNftSelected([]);
    }

    function handleIsNotHumpingSelected() {
        setIsHumpingSelected(false);
        setIsChange(true);
        setNftSelected([]);
    }

    return (
        <div className="">
            {isHumpingSelected ?
                <div className=''>
                    <div className='content-center place-items-end justify-end w-full grid grid-cols-2'>
                        <div className='place-self-center'>
                            <img alt='Humping tab' src='/humping_images/Humping.png' onClick={handleIsHumpingSelected}
                                 className="bg-[#414A78] rounded-t-xl w-full h-full transition duration-500 hover:opacity-90"/>
                        </div>
                        <div className=''>
                            <img alt='Not Humping tab' src='/humping_images/Not_Humping_Not_selected.png' onClick={handleIsNotHumpingSelected}
                                 className="rounded-t-xl w-11/12 h-full transition duration-500 hover:opacity-90"/>
                        </div>
                    </div>
                    <div className='border-2 rounded-3xl bg-[#6f84ef57]'>
                        <div className="grid content-center w-full">
                            <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                {nftData !== undefined && nftData.length > 0 &&
                                    nftData.map((nft: any) => {
                                        return <NftComponent key={nft.id} id={nft.id} profileNft={nft.metadata.image}
                                                             nftTokenId={nft.tokenId}
                                                             favPosition={nft.metadata.attributes[1].value}
                                                             handleAddTokenIdToList={handleAddTokenIdToList}
                                                             handleRemoveTokenIdToList={handleRemoveTokenIdToList}
                                                             nft={nft}
                                                             isChange={isChange}/>
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
                            <img src='/humping_images/Humping_Not_selected.png' onClick={handleIsHumpingSelected}
                                 className="bg-[#414A78] rounded-t-xl text-3xl w-11/12 h-full transition duration-500 hover:opacity-90"/>
                        </div>
                        <div className=''>
                            <img src='/humping_images/Not_Humping.png' onClick={handleIsNotHumpingSelected}
                                 className="rounded-t-xl text-3xl w-10/12 h-full transition duration-500 hover:opacity-90"/>
                        </div>
                    </div>
                    <div className='border-2 rounded-3xl bg-[#6f84ef57]'>
                        <div className="grid content-center w-full">
                            <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                {nftData.map((nft: any) => {
                                    return <NftComponent key={nft.id} id={nft.id} 
                                    nftTokenId={nft.tokenId}
                                    profileNft={nft.metadata.image} favPosition={nft.metadata.attributes[1].value}
                                    handleAddTokenIdToList={handleAddTokenIdToList}
                                    handleRemoveTokenIdToList={handleRemoveTokenIdToList} nft={nft} />
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
        <TotalHumping isHumpingSelected={isHumpingSelected} totalNft={nftData.length} nftSelected={nftSelected}/>
        </div>
    )
}