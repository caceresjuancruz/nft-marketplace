'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import { useTranslation } from '@/app/i18n/client'
import { useLanguage } from '@/context/LanguageProvider'

const NavContent = () => {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng, 'translations')
  const pathname = usePathname()

  return (
    <section className='flex h-full flex-1 flex-col gap-6 pt-16'>
      {sidebarLinks.map(item => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={
                'cursor-pointer bg-transparent text-5xl text-slate-200 hover:text-white'
              }
            >
              <span className='flex items-center justify-start gap-4 p-4'>
                <p className='font-thin'>{t(`${item.label}`)}</p>
              </span>
            </Link>
          </SheetClose>
        )
      })}
    </section>
  )
}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/assets/icons/hamburger.svg'
          width={36}
          height={36}
          alt='Menu'
          className='hidden cursor-pointer sm:block'
          unoptimized
        />
      </SheetTrigger>
      <SheetContent side='left' className='border-none'>
        <div className='flex h-full flex-col justify-between overflow-y-auto'>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
