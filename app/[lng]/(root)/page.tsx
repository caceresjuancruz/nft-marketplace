import { Banner, CreatorCard } from '@/components/index'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFT Marketplace | CryptoMarket'
}

export default async function NftHome() {
  return (
    <section className='py-24'>
      <div className='container'>
        <Banner />
      </div>
    </section>
  )
}
