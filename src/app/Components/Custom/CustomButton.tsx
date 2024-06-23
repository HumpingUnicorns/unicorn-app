'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDisconnect, useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CustomButton = () => {
  const [username, setUsername] = useState(null);
  const { disconnect } = useDisconnect();
  const accountStatus = useAccount();

  useEffect(() => {
    const fetchUsername = async () => {
      if (accountStatus?.address) {
        try {
          const response = await axios.post(`https://names.raffllrr.xyz/names`, {
            addresses: [accountStatus.address]
          });
          const usernameData = response.data[accountStatus.address];
          setUsername(usernameData.mamboName || usernameData.avvyName || null);
        } catch (error) {
          setUsername(null);
          console.error('Error fetching username:', error);
        }
      }
    };
    
    fetchUsername();
  }, [accountStatus.address]);

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
                    <button className='bg-[#414A78] p-2 border-2 font-text text-[#f3f3f3] border-solid border-white rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50' onClick={openConnectModal} type="button" style={{ boxShadow: "0 0.15rem 0 0 rgba(255, 255, 255, 0.2)" }}>
                      Connect Wallet
                    </button>
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <div className=''>
                    <button className='bg-[#414A78] p-2 border-2 border-solid border-white font-text rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50' onClick={openChainModal} type="button" style={{ boxShadow: "0 0.15rem 0 0 rgba(255, 255, 255, 0.25)" }}>
                      Wrong network
                    </button>
                  </div>
                );
              }

              return (
                <div className='flex gap-4'>
                  <button
                    className='bg-[#414A78] flex p-2 border-2 border-solid border-white font-text rounded-2xl hover:bg-pink-300 shadow-2xl shadow-blue-800/50'
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center', boxShadow: "0 0.15rem 0 0 rgba(255, 255, 255, 0.25)" }}
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
                  <button className={`flex bg-[#414A78] border-2 border-solid border-white p-2 rounded-3xl font-text text-2xl font-black text-[#ffffff] hover:bg-pink-300 shadow-2xl shadow-blue-800/50`} onClick={openAccountModal} type="button" style={{ boxShadow: "0 0.15rem 0 0 rgba(255, 255, 255, 0.1)" }}>
                    {username || account.displayName}
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