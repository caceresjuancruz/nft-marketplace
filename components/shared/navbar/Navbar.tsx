'use client'
import { sidebarLinks } from '@/constants'
import { Logo, MobileNav, CreateButton } from '../../index'
import Link from 'next/link'

import { useLanguage } from '@/context/LanguageProvider'
import { useTranslation } from '@/app/i18n/client'

const Navbar = () => {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng, 'translations')
  return (
    <nav className='flexBetween fixed z-10 w-full flex-row gap-4 p-4'>
      <Logo />
      <div>
        <div className='flex flex-initial flex-row items-center justify-end gap-8 sm:hidden'>
          {sidebarLinks.map(item => (
            <Link
              key={item.route}
              href={item.route}
              className='cursor-pointer text-3xl font-thin uppercase text-slate-300 hover:text-white'
            >
              {t(`${item.label}`)}
            </Link>
          ))}
          <CreateButton />
        </div>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
