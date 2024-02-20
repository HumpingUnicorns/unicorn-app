'use client'

import React, { useEffect, useState } from 'react';
import NftComponent from "./NftComponent";
import NftFilledComponent from './NftFilledComponent';
import axios from 'axios';
import {useAccount, useConnect} from 'wagmi';

export default function Table() {
    const [isHumpingSelected, setIsHumpingSelected] = useState(true);
    const [nftSelected, setNftSelected] = useState([]);
    const [nftFilled, setNftFilled] = useState([]);
    const account = useAccount();
    const CONTRACT_ADDRESS = "0x34b4da1a0b06cfb09cb0efb46f02e667330e17db";

    const handleAddObjectToList = (nft) => {
        setNftSelected([...nftSelected, nft]);        
      };

    const handleRemoveObjectToList = (indexToRemoveId: Number) => {
        const updatedNftSelected = nftSelected.filter((item, index) => index !== indexToRemoveId);
        console.log(updatedNftSelected)
        setNftSelected(updatedNftSelected);
    }  

    useEffect(() => {
        if (account.address) { // Vérifie si account.address est défini
            const baseURL = `https://api.joepegs.dev/v3/users/${account.address}/items`;
            const getItems = async () => {
                const params = {
                    collectionAddresses: CONTRACT_ADDRESS
                };
                const headers = {
                    'x-joepegs-api-key': 'ePy3wz7ourtEBZCvUlcDm6tElL64IXTqoXYN'
                };
                try {
                    const response = await axios.get(baseURL, { params, headers });
                    const data = response.data;
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching items:', error);
                }
            };
            getItems();
        }
    }, [account.address]); // Déclenche uniquement lorsque account.address change
    


    const nft = {
    id: 1,
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
    const nft2 = {
        id: 2,
        "name": "OUE PELO",
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
    const [tabNft, setTabNft] = useState([nft, nft2]);
    // Utilisez un effet pour remplir nftFilled une seule fois
    useEffect(() => {
        if (tabNft.length < 6) {
            const additionalNftCount = 6 - tabNft.length;
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

    function handleIsHumpingSelected(){
        setIsHumpingSelected(true);
    }

    function handleIsNotHumpingSelected(){
        setIsHumpingSelected(false);
    }

    return(
        <div className="">
                {isHumpingSelected ?
                        <div className=''>
                            <div className='content-center place-items-end justify-end w-full grid grid-cols-2'>
                                <div className='place-self-center'>
                                    <img src='/Humping.png' onClick={handleIsHumpingSelected} className="bg-[#414A78] rounded-t-xl w-full h-full transition duration-500 hover:opacity-90" />
                                </div>
                                <div className=''>
                                    <img src='/Not_Humping_Not_selected.png' onClick={handleIsNotHumpingSelected} className="rounded-t-xl w-11/12 h-full transition duration-500 hover:opacity-90" />
                                </div>
                                </div>
                                <div className='border-2 rounded-3xl bg-[#6f84ef57]'>
                                    <div className="grid content-center w-full">
                                        <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                        {tabNft.map(nft=>{
                                                return <NftComponent key={nft.id} id={nft.id}  profileNft={nft.image} favPosition={nft.attributes[1].value} handleAddObjectToList={handleAddObjectToList} handleRemoveObjectToList={handleRemoveObjectToList} nft={nft}/>
                                            })}
                                        {
                                        nftFilled.map(nft=>{
                                            return(
                                                <NftFilledComponent key={nft.id} id={ nft.id } image={ nft.image }/>
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
                                    <img src='/Humping_Not_selected.png' onClick={handleIsHumpingSelected} className="bg-[#414A78] rounded-t-xl text-3xl w-11/12 h-full transition duration-500 hover:opacity-90" />
                                </div>
                                <div className=''>
                                    <img src='/Not_Humping.png' onClick={handleIsNotHumpingSelected} className="rounded-t-xl text-3xl w-10/12 h-full transition duration-500 hover:opacity-90" />
                                </div>
                                </div>
                                <div className='border-2 rounded-3xl bg-[#6f84ef57]'>
                                    <div className="grid content-center w-full">
                                        <div className={`grid h-full grid-cols-pannel p-4 gap-4`}>
                                        {tabNft.map(nft=>{
                                                return <NftComponent key={nft.id} id={nft.id}  profileNft={nft.image} favPosition={nft.attributes[1].value} handleAddObjectToList={handleAddObjectToList} handleRemoveObjectToList={handleRemoveObjectToList} nft={nft}/>
                                            })}
                                        {
                                        nftFilled.map(nft=>{
                                            return(
                                                <NftFilledComponent key={nft.id} id={ nft.id } image={ nft.image }/>
                                            )
                                        })
                                        }
                                        </div>                        
                                    </div>
                                </div>
                                addresses: {JSON.stringify(account.addresses)}
                        </div>
                        
                }
    </div> 
    )
}