'use client'

import { useEffect, useState, useTransition, useMemo } from "react";
import { useAccount } from "wagmi";
import { getAllNfts } from "@/app/services/actions/getNfts";
import Table from "@/app/Components/Table/table";
import TableNoNft from "@/app/Components/Table/tableNoNft";
import Spinner from "../Components/Spinner/Spinner";
import { useReadContract } from 'wagmi'
import abi from "src/app/abi.json";

export default function NftPage() {
    const { readContract } = useReadContract();
    const CONTRACT_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
    // Get the user address
    const userAddress = useAccount().address;
    const [isPending, startTransition] = useTransition()
    const [nftData, setNftData] = useState<any>([]);
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

    // This function will be called to get the NFTs for the user
    async function getNftDataFromContract() {
        const listOfNftStack = readContract({ 
            abi,
            address: CONTRACT_ADDRESS,
            functionName: 'getStakedIdsFromOwner',
            args: [
              userAddress
            ],
         });
         setNftDataFromContract(listOfNftStack);
    }

    // Call the function to get the NFTs
    useEffect(() => {
        getNftData();
    }, []);

    const TableComponent = useMemo(() => {
        if(isPending){
            if (nftData.length > 0) {
                return <Table nftData={nftData} nftDataFromContract={nftDataFromContract} />;
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