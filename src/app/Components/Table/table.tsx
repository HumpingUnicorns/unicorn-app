'use client'

import React, { useEffect, useState } from 'react';
import NftComponent from "@/app/Components/Table/NftComponent/NftComponent";
import NftFilledComponent from '@/app/Components/Table/NftComponent/NftFilledComponent';
import TotalHumping from './DisplayComponent/TotalHumping';
import NftModel from '../utils/Models/NftModel';

interface NftFilled {
    key: string; // Ou tout autre type approprié pour la clé
    id: number;
    image: string; // Ou tout autre type approprié pour l'image
}

export default function Table({nftData, stakedNftDataFromOwner, isSuccessNftStaked, isSuccess}: any) {

    const [isChange, setIsChange] = useState(false);
    const [nftSelected, setNftSelected] = useState<any>([]);
    const [nbNftSelected, setNbNftSelected] = useState<any>(0);
    const [nftFilled, setNftFilled] = useState<any>([]);
    const [nftStakedFilled, setNftStakedFilled] = useState<any>([]);
    const [isHumpingSelected, setIsHumpingSelected] = useState(true);
    

    async function handleAddTokenIdToList(tokenId : Number){
        const tmpNftSelectedList = nftSelected;
        tmpNftSelectedList.push(tokenId);
        setNftSelected(tmpNftSelectedList);
        setNbNftSelected(tmpNftSelectedList.length);
    };

    // Remove object from list by index
    function handleRemoveTokenIdToList(tokenIdToRemoved: Number){
        const updatedNftSelected = nftSelected.filter((itemTokenId: Number) => itemTokenId !== tokenIdToRemoved);
        setNftSelected(updatedNftSelected);
        setNbNftSelected(updatedNftSelected.length);
    }

    // Utilisez un effet pour remplir nftFilled une seule fois
    useEffect(() => {
            // If nftData is less than 6, fill the rest with empty nfts
            if (nftData.length < 8) {
                const additionalNftCount = 8 - nftData.length;
                const filledNfts = [];
                for (let i = 0; i < additionalNftCount; i++) {
                    filledNfts.push({
                        id: i,
                        image: "/humping_images/Filled_Unicorn.png"
                    });
                }
            setNftFilled(filledNfts);
        }
        
    }, [nftData]);

    useEffect(() => {
        // If nftData is less than 6, fill the rest with empty nfts
        if (stakedNftDataFromOwner.length < 8) {                        
            const additionalNftCount = 8 - stakedNftDataFromOwner.length;
            const filledNfts = [];
            for (let i = 0; i < additionalNftCount; i++) {
                filledNfts.push({
                    id: i,
                    image: "/humping_images/Filled_Unicorn.png"
                });
            }
            setNftStakedFilled(filledNfts);
            
        }
    }, [stakedNftDataFromOwner]);


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
        <div className="w-11/12 md:w-full md:ml-6">
            {isHumpingSelected ?
                <div className=''>
                    <div className='w-full grid grid-cols-2 content-center'>
                        <div className='flex place-self-end justify-center'>
                            <img alt='Humping tab' src='/humping_images/Humping.png' onClick={handleIsHumpingSelected}
                                 className="md:rounded-t-xl w-9/12 h-full transition duration-500 hover:opacity-90" style={{cursor: 'pointer'}}/>
                        </div>
                        <div className=' flex place-self-end justify-center'>
                            <img alt='Not Humping tab' src='/humping_images/Not_Humping_Not_selected.png' onClick={handleIsNotHumpingSelected}
                                 className="md:rounded-t-xl w-9/12 h-full transition duration-500 hover:opacity-90" style={{cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className='border-4 rounded-lg md:rounded-3xl bg-[#6f84ef57]'>
                        <div className="grid content-center w-full">
                            <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                {stakedNftDataFromOwner !== undefined && stakedNftDataFromOwner.length > 0 &&
                                    stakedNftDataFromOwner.map((nft: NftModel) => {
                                        return <NftComponent key={nft.id} id={nft.id} profileNft={nft.dataImage}
                                                             nftTokenId={nft.tokenId}
                                                             favPosition={nft.favPosition}
                                                             handleAddTokenIdToList={handleAddTokenIdToList}
                                                             handleRemoveTokenIdToList={handleRemoveTokenIdToList}
                                                             isChange={isChange}/>
                                    })}
                                {
                                    nftStakedFilled.map((nft : NftFilled ) => {
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
                    <div className='flex place-self-end justify-center'>
                            <img src='/humping_images/Humping_Not_selected.png' onClick={handleIsHumpingSelected}
                                 className="md:rounded-t-xl w-9/12 h-full transition duration-500 hover:opacity-90" style={{cursor: 'pointer'}}/>
                        </div>
                        <div className='flex place-self-end justify-center'>
                            <img src='/humping_images/Not_Humping.png' onClick={handleIsNotHumpingSelected}
                                 className="md:rounded-t-xl w-9/12 h-full transition duration-500 hover:opacity-90" style={{cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className='border-4 rounded-lg md:rounded-3xl bg-[#6f84ef57]'>
                        <div className="grid content-center w-full">
                            <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                {nftData.map((nft: NftModel) => {
                                    return <NftComponent key={nft.id} id={nft.id} 
                                    nftTokenId={nft.tokenId}
                                    profileNft={nft.dataImage} favPosition={nft.favPosition}
                                    handleAddTokenIdToList={handleAddTokenIdToList}
                                    handleRemoveTokenIdToList={handleRemoveTokenIdToList} isChange={isChange} />
                                })}
                                {
                                    nftFilled.map((nft: NftFilled) => {
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
        <TotalHumping isHumpingSelected={isHumpingSelected} totalNft={nftData.length} totalNftStacked={stakedNftDataFromOwner.length} nftSelected={nftSelected} nbNftSelected={nbNftSelected}/>
        </div>
    )
}