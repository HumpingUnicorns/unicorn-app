import { http, createConfig } from 'wagmi'
import { avalanche } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [avalanche],
  connectors: [
    metaMask()
  ],
  ssr: true,
  transports: {
    [avalanche.id]: http("https://api.avax.network/ext/bc/C/rpc"),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
