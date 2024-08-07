import './globals.css'
import type { Metadata } from 'next'
import { Inter, Patrick_Hand, Meera_Inimai} from 'next/font/google'
import { type ReactNode } from 'react'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

const patrick_hand = Patrick_Hand({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-patrick-hand',
});

const meera_inimai = Meera_Inimai({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-meera-inimai',
});


export const metadata: Metadata = {
  title: 'Hump House',
  description: 'A place for unicorns to explore sexual fantasies with friends',
  twitter: {
    card: 'summary_large_image',
    title: 'Humping Unicorns Hump House',
    description: 'A place for unicorns to explore sexual fantasies with friends',
    site: '@HumpingUnic0rns',
    images: ['https://d114glq7ezmm80.cloudfront.net/Tweet_Card.png'], // Must be an absolute URL
  },
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" className={`${patrick_hand.variable} ${meera_inimai.variable}`}>
      <body >
      <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh"
            }}>
                <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src="/background/Hump_House_Background.mp4" type="video/mp4" />
                </video>

            </div>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}
