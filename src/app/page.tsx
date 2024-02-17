'use client'

import {useAccount, useConnect, useDisconnect, useSwitchChain, useChains, useEnsName} from 'wagmi';
import { avalanche } from '@wagmi/core/chains'
import { switchChain } from '@wagmi/core';
import { config } from '@/wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import { CustomButton } from "./Components/Custom/CustomButton.tsx"
import Navbar from './Components/Navbar/Navbar';
import Table from './Components/Table/Table';
import Navigation from './Components/Navbar/Navigation';

const ensAddress = '0xC4789f786E3cD88Ce22c19Ba790F8Ad548f2001e'

function App() {
  const { openChainModal } = useChainModal();
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { chainInfo } = useChains();
  const { openAccountModal } = useAccountModal();
  const result = async() => await switchChain(config, {
    chainId: avalanche.id, 
  })

  const { data, isLoading } = useEnsName({
    address: ensAddress
  })

  return (
      <div className="min-h-full w-full">
        <div>
          <Navigation />
        </div> 
        <div className='flex justify-center mt-6'>
          <h2 className={`text-[#414A78] text-8xl font-text font-bold mt-4 mb-4`}>Welcome to the Unicorn Humping</h2>
        </div>
        <div>

        </div>
        <div className='' >
          <Table />
        </div>
      </div>
  )
}

export default App
