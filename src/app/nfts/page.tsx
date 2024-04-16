'use client'

import { useEffect, useState, useTransition, useMemo } from "react";
import { useAccount, useContractRead } from "wagmi";
import { getAllNfts } from "@/app/services/actions/getNfts";
import Table from "@/app/Components/Table/table";
import TableNoNft from "@/app/Components/Table/tableNoNft";
import Spinner from "../Components/Spinner/Spinner";
import abi from "src/app/abi.json";
import { getAllNftDataFromContract } from "../services/actions/getAllNfts";
import NftFlingComponent from "../Components/Table/NftComponent/NftFling";
import NftModel from "../Models/NftModel"


export default function NftPage() {
    // Get the user address
    const userAddress = useAccount().address;
    const [isPending, startTransition] = useTransition()
    const [nftData, setNftData] = useState<NftModel[]>([]);
    const [nftIdFromContract, setNftIdFromContract] = useState<any>([]);
    const [nftDataFromContract, setNftDataFromContract] = useState<NftModel[]>([]);
    //const [isHumpingSelected, setIsHumpingSelected] = useState(true);
    const [nftFilled, setNftFilled] = useState({
        id: 1,
        image: "/humping_images/Filled_Unicorn.png"
    });

    const [error, setError] = useState(null);

    // This function will be called to get the NFTs for the user
    async function getNftData() {
        try {
            startTransition(async () => {
                const result = await getAllNfts(userAddress as string);
                const res: NftModel[] = [];
                for(let i=0; i<result.length;i++){
                    const instance = new NftModel(result[i].id, result[i].metadata.image, result[i].tokenId, result[i].metadata.attributes.find(attribute => attribute.traitType === "Favourite Position").value);
                    res.push(instance);
                }
                setNftData(res);                
            });
        } catch (err: any) {
            setError(err);
        }
    }
      
    const {data: id, isSuccess} = 
        useContractRead({ 
            abi,
            address: process.env.NEXT_PUBLIC_HUMPING_STACKING_CONTRACT,
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
                console.log(intIds);
            }
        } 
    }, [id, isSuccess]);
    

    // This function will be called to get the NFTs for the user
    async function getNftDataFromContract(nftIdFromContract: any) { 
        try {
            startTransition(async () => {
                const result = await getAllNftDataFromContract(nftIdFromContract);
                const res: NftModel[] = [];
                if(result){
                    for(let i=0; i<result.length;i++){
                        console.log();
                        const instance = new NftModel(result[i].id, result[i].metadata.image, result[i].tokenId, result[i].metadata.attributes.find(attribute => attribute.traitType === "Favourite Position").value);
                        res.push(instance);
                    }
                }
                setNftDataFromContract(res);
            });
       } catch (err: any) {
           setError(err);
       }        
   }

    function testHandleIsHumpingSelected() {
        //setIsHumpingSelected(true); 
    }

    function testHandleIsNotHumpingSelected() {
        //setIsHumpingSelected(false);
    }

    // Call the function to get the NFTs
    useEffect(() => {
        getNftDataFromContract(nftIdFromContract);  
        getNftData();
    }, [nftIdFromContract]);

   

    const TableComponent = useMemo(() => {
        if(isPending){
            if (nftData.length > 0 || nftDataFromContract.length > 0) {
                return <div>
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-1'>
                        <div></div>
                        <div className='flex justify-center place-content-start md:col-start-2 md:col-end-5'>
                            <Table nftData={nftData} stakedNftDataFromOwner={nftDataFromContract}
                                testHandleIsHumpingSelected={testHandleIsHumpingSelected}
                                testHandleIsNotHumpingSelected={testHandleIsNotHumpingSelected}/>
                        </div>
                    <div className='flex justify-center place-items-start mt-20 md:col-start-5 md:col-end-7'>
                    <div className='flex justify-center place-content-center w-8/12 rounded-3xl border-4 bg-[#6f84ef57]'>
                        <div className='flex-col w-full '>
                            <span className='flex justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-text text-4xl my-6'>LAST FLING</span>
                            <NftFlingComponent userAddress={userAddress} key={nftFilled.id} id={nftFilled.id} image={nftFilled.image}/>
                        </div> 
                    </div>
                </div>
                    </div>
                    </div>
            } else {
                return <TableNoNft />;
            }
        }else{
            return <div className="flex justify-center">
                <Spinner />
                </div>
        }
        
    }, [nftData, nftDataFromContract]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {TableComponent}
        </>
    )
}