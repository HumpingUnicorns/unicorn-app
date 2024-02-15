'use client'

import {useAccount, useConnect, useDisconnect, useSwitchChain} from 'wagmi';
import { avalanche } from '@wagmi/core/chains'
import { switchChain } from '@wagmi/core';
import { config } from '@/wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const result = async() => await switchChain(config, {
    chainId: avalanche.id, 
  })

  return (
    <>
      <div>
        <ConnectButton accountStatus="avatar" />
        <h2>Account</h2>
        {account.chainId !== avalanche.id ?
            <div>
              OMG SALE FOU
            </div>
            :
            <div>
              status: {account.status}
              <br/>
              addresses: {JSON.stringify(account.addresses)}
              <br/>
              chainId: {account.chainId}
            </div>
        }

        {account.status === 'connected' && (
            <button type="button" onClick={() => disconnect()}>
              Disconnect
            </button>
        )}
      </div>
    </>
  )
}

export default App
