import { FooterLink, SidebarLink, SocialLink } from '@/types'

export type ThemeMode = 'light' | 'dark' | 'system'

interface Theme {
  value: ThemeMode
  label: string
  icon: string
}

export const themes: Theme[] = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' }
]

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '',
    route: '/',
    label: 'explore'
  },
  {
    imgURL: '',
    route: '/nft',
    label: 'listed'
  },
  {
    imgURL: '',
    route: '/nft/owned',
    label: 'owned'
  }
]

export const socialLinks: SocialLink[] = [
  {
    iconUrl: '/assets/icons/instagram.svg',
    link: 'https://www.linkedin.com/in/caceresjuancruz/',
    alt: 'Instagram'
  },
  {
    iconUrl: '/assets/icons/x.svg',
    link: 'https://www.linkedin.com/in/caceresjuancruz/',
    alt: 'X Social'
  },
  {
    iconUrl: '/assets/icons/telegram.svg',
    link: 'https://www.linkedin.com/in/caceresjuancruz/',
    alt: 'Telegram'
  },
  {
    iconUrl: '/assets/icons/discord.svg',
    link: 'https://www.linkedin.com/in/caceresjuancruz/',
    alt: 'Discord'
  }
]

export const cryptoMarketFooterLinks: FooterLink[] = [
  {
    route: '/',
    label: 'explore'
  },
  {
    route: '/',
    label: 'howItWorks'
  },
  {
    route: '/',
    label: 'contactUs'
  }
]

export const supportFooterLinks: FooterLink[] = [
  {
    route: '/',
    label: 'helpCenter'
  },
  {
    route: '/',
    label: 'termsOfService'
  },
  {
    route: '/',
    label: 'legal'
  },
  {
    route: '/',
    label: 'privacyPolicy'
  }
]
