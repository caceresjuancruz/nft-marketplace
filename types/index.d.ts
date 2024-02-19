//Types and interfaces needed for components/pages
export interface SidebarLink {
  imgURL: string
  route: string
  label: string
}

export interface SocialLink {
  iconUrl: string
  link: string
  alt: string
}

export interface FooterLink {
  route: string
  label: string
}

export interface ParamsProps {
  params: { lng: string }
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined }
}

export interface URLProps {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}

export interface LayoutProps {
  params: { lng: string }
  children: React.ReactNode
}

export interface Theme {
  value: ThemeMode
  label: string
  icon: string
}
