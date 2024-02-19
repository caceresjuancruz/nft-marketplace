'use client'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function BannerCards() {
  return (
    <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
      <BentoGridItem header={<BannerCardContent />} />
    </BentoGrid>
  )
}

const BannerCardContent = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5
    },
    hover: {
      x: 0,
      rotate: 0
    }
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5
    },
    hover: {
      x: 0,
      rotate: 0
    }
  }
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2'
    >
      <motion.div
        variants={first}
        className='flex h-full w-1/3 flex-col items-center justify-center'
      >
        <Image
          src='/assets/images/nft1.jpg'
          alt='Nft1'
          width={900}
          height={900}
          unoptimized
          className='rounded-3xl shadow-2xl'
        />
      </motion.div>
      <motion.div className='relative z-20 flex h-full w-1/3 flex-col items-center justify-center bg-transparent'>
        <Image
          src='/assets/images/nft2.jpg'
          alt='Nft2'
          width={900}
          height={900}
          unoptimized
          className='rounded-3xl shadow-2xl'
        />
      </motion.div>
      <motion.div
        variants={second}
        className='flex h-full w-1/3 flex-col items-center justify-center bg-transparent'
      >
        <Image
          src='/assets/images/nft3.png'
          alt='Nft3'
          width={900}
          height={900}
          unoptimized
          className='xl rounded-3xl shadow-2xl'
        />
      </motion.div>
    </motion.div>
  )
}
