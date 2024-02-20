import { formatAndDivideNumber, truncateString } from '@/lib/utils'
import Image from 'next/image'

interface NftCardProps {
  image: string
  title: string
  likeCount: number
  price: number
}

const NftCard = ({ image, title, likeCount, price }: NftCardProps) => {
  return (
    <div className='relative h-[20rem] w-[16rem] cursor-pointer overflow-hidden rounded-3xl border border-slate-500/50 shadow hover:border-slate-400/50'>
      <Image
        alt={title}
        className='h-full w-full select-none object-cover'
        height={400}
        width={350}
        src={image}
      />
      <div className='absolute right-4 top-4 flex items-center space-x-2 rounded-full border border-slate-500/50 bg-slate-700/50 px-3 py-1 shadow-sm backdrop-blur-sm transition hover:shadow-md'>
        <Image
          alt='Like'
          height={20}
          src='/assets/icons/favourite.svg'
          width={20}
        />
        <span className='text-white'>{formatAndDivideNumber(likeCount)}</span>
      </div>
      <div className='absolute bottom-0 left-0 w-full p-4 '>
        <div className='rounded-2xl border border-slate-500/50 bg-slate-700/50 px-4 py-2 shadow backdrop-blur-sm'>
          <h3 className='text-lg font-semibold text-white'>
            {truncateString(title)}
          </h3>
          <p className='text-gray-300'>Saskehh Rio</p>
          <p className='text-lg font-semibold text-white'>{price}ETH</p>
        </div>
      </div>
    </div>
  )
}

export default NftCard
