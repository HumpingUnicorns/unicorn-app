import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Wagmi',
  description: 'Generated by create-wagmi',
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
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
