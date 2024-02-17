'use client'
import { useTranslation } from '@/app/i18n/client'
import { useLanguage } from '@/context/LanguageProvider'
import Link from 'next/link'

const CreateButton = () => {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng, 'translations')
  return (
    <Link href='/nft/create' className=''>
      <span className='text-3xl uppercase text-purple-600 hover:text-purple-400'>
        {t('create')}
      </span>
    </Link>
  )
}

export default CreateButton
