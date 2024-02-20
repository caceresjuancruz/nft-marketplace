import { FooterLink, SidebarLink, SocialLink, Theme } from '@/types'
import { images } from './images'

export type ThemeMode = 'light' | 'dark' | 'system'

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
    iconUrl: images.instagram,
    link: 'https://www.linkedin.com/in/caceresjuancruz/',
    alt: 'Instagram'
  },
  {
    iconUrl: images.x,
    link: 'https://www.linkedin.com/in/caceresjuancruz/',
    alt: 'X Social'
  },
  {
    iconUrl: images.telegram,
    link: 'https://www.linkedin.com/in/caceresjuancruz/',
    alt: 'Telegram'
  },
  {
    iconUrl: images.discord,
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
