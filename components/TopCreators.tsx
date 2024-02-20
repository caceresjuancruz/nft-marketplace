'use client'
import { useTranslation } from '@/app/i18n/client'
import CreatorCard from './card/CreatorCard'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { images } from '@/constants/images'
import { Divide, Heading1 } from 'lucide-react'

interface TopCreatorsProps {
  lng: string
}

const TopCreators = ({ lng }: TopCreatorsProps) => {
  const { t } = useTranslation(lng, 'translations')
  const parentRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hideButtons, setHideButtons] = useState<boolean>(false)

  const handleScroll = (direction: string) => {
    const { current } = scrollRef
    if (!current) return

    const scrollAmount = 220

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount
    } else if (direction === 'right') {
      current.scrollLeft += scrollAmount
    }
  }

  const isScrollable = () => {
    const { current } = scrollRef
    const { current: parent } = parentRef

    if (!current || !parent) return

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false)
    } else {
      setHideButtons(true)
    }
  }

  useEffect(() => {
    isScrollable()
    window.addEventListener('resize', isScrollable)
    return () => {
      window.removeEventListener('resize', isScrollable)
    }
  })

  return (
    <div>
      <h1 className='ml-4 text-2xl font-semibold xs:ml-0 minlg:text-4xl'>
        {t('topCreators')}
      </h1>

      <div className='relative mt-6 flex max-w-full flex-1' ref={parentRef}>
        <div
          className='no-scrollbar flex w-max select-none flex-row gap-3 overflow-x-scroll'
          ref={scrollRef}
        >
          {[6, 7, 8, 9, 10, 11].map(i => (
            <CreatorCard
              avatar={''}
              username={''}
              name={''}
              followers={0}
              rank={0}
              key={i}
            />
          ))}
          {!hideButtons && (
            <>
              <div
                onClick={() => handleScroll('left')}
                className='absolute left-0 top-45 h-8 w-8 cursor-pointer xs:hidden minlg:h-12 minlg:w-12'
              >
                <Image
                  src={images.leftArrow}
                  alt='Left arrow'
                  height={24}
                  width={24}
                  unoptimized
                  className='object-contain opacity-50 shadow-lg hover:opacity-100'
                />
              </div>
              <div
                onClick={() => handleScroll('right')}
                className='absolute right-0 top-45 h-8 w-8 cursor-pointer xs:hidden minlg:h-12 minlg:w-12'
              >
                <Image
                  src={images.rightArrow}
                  alt='Right arrow'
                  height={24}
                  width={24}
                  unoptimized
                  className='object-contain opacity-50 shadow-lg hover:opacity-100'
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopCreators
