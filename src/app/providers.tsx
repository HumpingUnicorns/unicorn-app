'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { WagmiProvider, useEnsName } from 'wagmi'
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '@/wagmi';
import { CustomAvatar } from './Components/Custom/CustomAvatar.tsx';

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

 
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient} >
        <RainbowKitProvider avatar={CustomAvatar}>
            {props.children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
