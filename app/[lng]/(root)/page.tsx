import TopCreators from '@/components/TopCreators'
import { Banner, CreatorCard } from '@/components/index'
import { ParamsProps } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFT Marketplace | CryptoMarket'
}

export default async function NftHome({ params: { lng } }: ParamsProps) {
  return (
    <section className='py-24'>
      <div className='container'>
        <Banner />
        <TopCreators lng={lng} />
      </div>
    </section>
  )
}
