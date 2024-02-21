import { serverSideTranslation } from '@/app/i18n'
import { ParamsProps } from '@/types'
import { Metadata } from 'next'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import CreateItemForm from '@/components/form/CreateItemForm'

export const metadata: Metadata = {
  title: 'Create NFT | CryptoMarket'
}

export default async function CreateNFTPage({ params: { lng } }: ParamsProps) {
  const { t } = await serverSideTranslation(lng, 'translations')
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='ml-4 text-2xl font-semibold xs:ml-0 minlg:text-4xl'>
          {t('createNewItem')}
        </h1>
        <CreateItemForm lng={lng} />
      </div>
    </section>
  )
}
