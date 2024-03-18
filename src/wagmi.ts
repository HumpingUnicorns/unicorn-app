import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { avalanche, avalancheFuji} from 'wagmi/chains'
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rabbyWallet,
} from '@rainbow-me/rainbowkit/wallets';

// Connectors for wallet
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, rabbyWallet],
    },
  ],
  {
    appName: 'Unicorn App',
    projectId: 'UNICORN-APP',
  }
);


export const config = createConfig({
  chains: [avalanche, avalancheFuji],
  connectors: connectors,
  ssr: true,
  transports: {
    [avalanche.id]: http("https://avalanche.drpc.org/"),
    [avalancheFuji.id]: http("https://api.avax-test.network/ext/bc/C/rpc")
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
