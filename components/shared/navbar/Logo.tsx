import Link from 'next/link'
import LogoSvg from './LogoSvg'

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex cursor-pointer items-center'
      aria-label='CryptoMarket Logo'
    >
      <LogoSvg height={36} width={36} />
      <span className='ml-2 block text-xl font-bold md:hidden'>
        CryptoMarket
      </span>
    </Link>
  )
}

export default Logo
