'use client'

import { useTranslation } from '@/app/i18n/client'
import Logo from '../navbar/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cryptoMarketFooterLinks, supportFooterLinks } from '@/constants'
import Link from 'next/link'

interface FooterInfoProps {
  lng: string
}

const FooterInfo = ({ lng }: FooterInfoProps) => {
  const { t } = useTranslation(lng, 'translations')
  return (
    <div className='flex w-full flex-row gap-10 px-16 md:flex-col sm:px-4'>
      <div className='flexStart flex-1 flex-col gap-4'>
        <Logo />
        <p>{t('getLatestUpdates')}</p>
        <div className='flex w-full max-w-sm items-center space-x-2'>
          <Input
            type='email'
            id='email'
            placeholder='Email'
            className='bg-transparent'
          />
          <Button type='submit' className='bg-purple-600 hover:bg-purple-500'>
            {t('subscribe')}
          </Button>
        </div>
      </div>

      <div className='flex flex-row items-start justify-start gap-24'>
        <div>
          <h3 className='mb-5 text-xl font-semibold text-bone'>CryptoMarket</h3>
          <div className='flex flex-col items-start gap-4 align-bottom'>
            {cryptoMarketFooterLinks.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                aria-label={item.label}
                className='text-slate-300 hover:text-white'
              >
                {t(`${item.label}`)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-5 text-xl font-semibold text-bone'>
            {t('support')}
          </h3>
          <div className='flex flex-col items-start gap-4 align-bottom'>
            {supportFooterLinks.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                aria-label={item.label}
                className='text-slate-300 hover:text-white'
              >
                {t(`${item.label}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo
