'use client'
import { useTranslation } from '@/app/i18n/client'
import Link from 'next/link'

interface CreateButtonProps {
  lng: string
}

const CreateButton = ({ lng }: CreateButtonProps) => {
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
