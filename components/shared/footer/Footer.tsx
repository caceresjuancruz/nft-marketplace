'use client'

import { useTranslation } from '@/app/i18n/client'
import { socialLinks } from '@/constants'
import { SocialLink } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import FooterInfo from './FooterInfo'

interface FooterProps {
  lng: string
}

const Footer = ({ lng }: FooterProps) => {
  const { t } = useTranslation(lng, 'translations')
  return (
    <footer className='flexCenter flex-col py-16 sm:py-8'>
      <FooterInfo lng={lng} />
      <div className='flexCenter mt-5 w-full px-16 sm:px-4'>
        <div className='flexBetween xs:flexCenter mt-7 w-full flex-row gap-4 sm:flex-col'>
          <p className='text-center'>
            CryptoMarket, Inc. {t('rightsReserved')}.
          </p>
          <div className='flex flex-row gap-3'>
            {socialLinks.map((item: SocialLink, index) => (
              <Link
                key={index}
                href={item.link}
                target='_blank'
                aria-label={item.alt}
              >
                <Image
                  src={item.iconUrl}
                  alt={item.alt}
                  width={30}
                  height={30}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
