import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from './providers'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  applicationName: 'CryptoMarket',
  description: 'NFT Marketplace',
  authors: {
    name: 'Juan Cruz Cáceres',
    url: 'https://caceresjuan.vercel.app/'
  },
  creator: 'Juan Cruz Cáceres',
  publisher: 'Juan Cruz Cáceres',
  referrer: 'no-referrer',
  keywords: [
    'Nextjs',
    'Next.js 14',
    'React',
    'TypeScript',
    'TailwindCSS',
    'MongoDB',
    'Vercel',
    'Vercel Analytics',
    'Vercel Speed Insights',
    'NFT Marketplace Platform',
    'CryptoKet',
    'Blockchain',
    'Ethereum',
    'Hardhat',
    'Solidity',
    'Web3',
    'Smart Contracts',
    'IPFS',
    'Polygon',
    'Crypto',
    'Juan Cruz Cáceres'
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
