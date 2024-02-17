import { SidebarLink } from '@/types'

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
