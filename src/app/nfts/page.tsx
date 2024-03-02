'use client'

import { useEffect, useState, useTransition, useMemo } from "react";
import { useAccount } from "wagmi";
import { getAllNfts } from "@/app/services/actions/getNfts";
import Table from "@/app/Components/Table/table";
import TableNoNft from "@/app/Components/Table/tableNoNft";

export default function NftPage() {

    // Get the user address
    const userAddress = useAccount().address;
    const [isPending, startTransition] = useTransition()
    const [nftData, setNftData] = useState<any>([]);
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

    // Call the function to get the NFTs
    useEffect(() => {
        getNftData();
    }, []);

    const TableComponent = useMemo(() => {
        if (nftData.length > 0) {
            return <Table nftData={nftData} />;
        } else {
            return <TableNoNft />;
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