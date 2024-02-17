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
                    <button className='bg-[#414A78] p-2 border-2 font-text border-solid border-black rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50' onClick={openConnectModal} type="button" style={{ boxShadow: "0 0.25rem 0 0 #000" }}>
                      Connect Wallet
                    </button>
                  </div>
                  
                );
              }
              if (chain.unsupported) {
                return (
                  <div className=''>
                    <button className='bg-[#414A78] p-2 border-2 border-solid border-black font-text rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50' onClick={openChainModal} type="button" style={{ boxShadow: "0 0.25rem 0 0 #000" }}>
                      Wrong network
                    </button>
                  </div>
                );
              }
              return (
                <div className='flex gap-4'>
                  <button
                    className='bg-[#414A78] flex p-2 border-2 border-solid border-black font-text rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center', boxShadow: "0 0.25rem 0 0 #000" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div className='flex justify-center'
                        style={{
                          background: chain.iconBackground,
                          width: 30,
                          height: 30,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 0,
                          
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            className=''
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 30, height: 30 }}
                          />
                        )}
                      </div>
                    )}
                  </button>
                  <button className={`flex bg-[#414A78] border-2 border-solid border-black p-2 rounded-3xl font-text text-2xl font-black text-[#ffffff] hover:bg-pink-300 shadow-2xl shadow-blue-800/50`} onClick={openAccountModal} type="button" style={{boxShadow: "0 0.25rem 0 0 #000"}}>
                    {account.displayName}
                    {account.ensAvatar}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};