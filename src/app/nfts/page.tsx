'use client'

import { useEffect, useState, useTransition, useMemo } from "react";
import { useAccount, useContractRead } from "wagmi";
import { getAllNfts } from "@/app/services/actions/getNfts";
import Table from "@/app/Components/Table/table";
import TableNoNft from "@/app/Components/Table/tableNoNft";
import Spinner from "../Components/Spinner/Spinner";
import abi from "src/app/abi.json";
import { getAllNftDataFromContract } from "../services/actions/getAllNfts";


export default function NftPage() {
    //const CONTRACT_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
    const MOCK_CONTRACT_ADDRESS = "0xAF23849c758773F3F761648BaB9dcd851f6Fec62";
    // Get the user address
    const userAddress = useAccount().address;
    const [isPending, startTransition] = useTransition()
    const [nftData, setNftData] = useState<any>([]);
    const [stakedNftDataFromOwner, setStakedNftDataFromOwner] = useState<any>([]);

    const [nftIdFromContract, setNftIdFromContract] = useState<any>([]);
    const [nftDataFromContract, setNftDataFromContract] = useState<any>([]);

    const [error, setError] = useState(null);

    // This function will be called to get the NFTs for the user
    async function getNftData() {
        try {
            startTransition(async () => {
                const result = await getAllNfts(userAddress as string);
                setNftData(result);
            });
        } catch (err: any) {
            setError(err);
        }
    }

    
    const {data: id, isSuccess} = 
        useContractRead({ 
            abi,
            address: MOCK_CONTRACT_ADDRESS,
            functionName: 'getStakedIdsFromOwner',
            args: [
                userAddress
            ],
        });
    useEffect(() => {  
        if(isSuccess){
            if(id != undefined || id.length>0){
                const intIds = id.map(bigInt => parseInt(bigInt)); // ou Number(bigInt) pour une conversion explicite
                setNftIdFromContract(intIds);
                console.log(id);
            }
        } 
    }, [id, isSuccess]);
    

    // This function will be called to get the NFTs for the user
    async function getNftDataFromContract() {
        try {
           startTransition(async () => {
               const result = await getAllNftDataFromContract();
               setNftDataFromContract(result);
           });
       } catch (err: any) {
           setError(err);
       }        
       console.log(nftIdFromContract);
       
       const getStakedNftDataFromOwner = nftDataFromContract.filter(item => nftIdFromContract.includes(item.tokenId));
       setStakedNftDataFromOwner(getStakedNftDataFromOwner);
   }

    // Call the function to get the NFTs
    useEffect(() => {
        getNftData();
        getNftDataFromContract();
    }, [nftIdFromContract]);

    const TableComponent = useMemo(() => {
        if(isPending){
            if (nftData.length > 0) {
                return <Table nftData={nftData} stakedNftDataFromOwner={stakedNftDataFromOwner} />;
            } else {
                return <TableNoNft />;
            }
        }else{
            return <Spinner />
        }
        
    }, [nftData]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {TableComponent}
        </>
    )
}