'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from "next/image";
import {useDisconnect, useAccount} from 'wagmi';


export const CustomButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const { disconnect } = useDisconnect();
        const accountStatus = useAccount();

        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <div className=''>
                    <button className='bg-[#414A78] p-2 border-2 border-solid border-black rounded-2xl shadow-xl hover:bg-pink-300' onClick={openConnectModal} type="button">
                      Connect Wallet
                    </button>
                  </div>
                  
                );
              }
              if (chain.unsupported) {
                return (
                  <div className=''>
                    <button className='bg-[#414A78] p-2 border-2 border-solid border-black rounded-2xl shadow-xl hover:bg-pink-300' onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  </div>
                );
              }
              return (
                <div className='flex gap-4'>
                  <button
                    className='bg-[#414A78] p-2 border-2 border-solid border-black rounded-2xl shadow-xl hover:bg-pink-300'
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            className=''
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 24, height: 24 }}
                          />
                        )}
                      </div>
                    )}
                  </button>
                  <button className={`flex bg-[#414A78] border-2 border-solid border-black p-2 rounded-3xl shadow-xl font-text text-2xl font-black text-[#ffffff] hover:bg-pink-300`} onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.balanceSymbol}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                  {accountStatus.status === 'connected' && (
                  <button className='flex bg-[#414A78] border-2 border-solid border-black p-2 rounded-3xl shadow-xl font-text text-2xl font-black hover:bg-pink-300' type="button" onClick={() => disconnect()}>
                    Disconnect
                  </button>
        )}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};