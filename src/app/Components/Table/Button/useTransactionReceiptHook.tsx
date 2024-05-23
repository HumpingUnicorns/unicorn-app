import React, { useState, useEffect } from 'react';
import { useWaitForTransactionReceipt } from 'wagmi';
import { Hash } from 'viem'

export default function useTransactionReceiptHook(data:Hash) {
    const [isTransactionReceipt, setIsTransactionReceipt] = useState(false);

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      confirmations: 3,
      hash: data,
    })

    useEffect(() => {
        if(isConfirmed){
            setIsTransactionReceipt(true)
        }
    },[data]);

    return isTransactionReceipt;
}