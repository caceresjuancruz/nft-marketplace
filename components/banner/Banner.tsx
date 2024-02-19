'use client'

import { useEffect, useState } from 'react'
import { BannerCards } from './BannerCards'

const Banner = () => {
  const words = ['Discover', 'Collect', 'Sell']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const speed = 150
    const delay = 1000

    const handleTyping = () => {
      const currentText = words[currentWordIndex]

      if (isDeleting) {
        setCurrentWord(currentText.substring(0, currentWord.length - 1))
      } else {
        setCurrentWord(currentText.substring(0, currentWord.length + 1))
      }

      if (!isDeleting && currentWord === currentText) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false)
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length)
      }
    }

    const typingInterval = setInterval(handleTyping, speed)

    return () => clearInterval(typingInterval)
  }, [currentWord, isDeleting, currentWordIndex, words])

  return (
    <section>
      <div className='max-w-screen-xl xl:gap-0 mx-auto grid px-8 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 md:px-0'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='xl:text-9xl max-w-9xl mb-4 select-none text-8xl font-extrabold leading-none tracking-tight md:text-5xl dark:text-white'>
            <p id='typewriter' className='text-purple-500'>
              {currentWord}&nbsp;
            </p>{' '}
            <p>extraordinary NFTs</p>
          </h1>
          <p className='mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 lg:text-xl md:text-lg dark:text-gray-400'>
            Browse a curated selection of digital art, music, and more from your
            favorite creators.
          </p>
        </div>
        <div className='flex lg:col-span-5 lg:mt-0 md:hidden'>
          <BannerCards />
        </div>
      </div>
    </section>
  )
}

export default Banner
