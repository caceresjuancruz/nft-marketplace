'use client'
import { useTranslation } from '@/app/i18n/client'
import { NftCard } from '@/components/index'
import { images } from '@/constants/images'

interface HotBidsProps {
  lng: string
}

const HotBids = ({ lng }: HotBidsProps) => {
  const { t } = useTranslation(lng, 'translations')
  return (
    <div className='mt-16'>
      <div className='flexBetween mx-4 sm:flex-col sm:items-start xs:mx-0 minlg:mx-8'>
        <h1 className='ml-4 flex-1 text-2xl font-semibold xs:ml-0 minlg:text-4xl'>
          {t('hotBids')}
        </h1>
        <div>SearchBar</div>
      </div>
      <div className='mt-6 flex w-full flex-wrap justify-start gap-6 md:justify-center'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <NftCard
            image={images.nft3}
            title='Test nft bid asdadadawdawdaw'
            likeCount={230}
            price={0.2}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default HotBids
