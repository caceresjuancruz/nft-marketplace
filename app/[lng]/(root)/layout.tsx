import { LayoutProps } from '@/types'
import { Navbar, Footer } from '../../../components/index'
import { Toaster } from '@/components/ui/toaster'

export default async function MainLayout({
  children,
  params: { lng }
}: LayoutProps) {
  return (
    <div className='min-h-screen bg-main-background bg-cover bg-fixed bg-center bg-no-repeat '>
      <div className='min-h-screen text-bone backdrop-blur-md'>
        <Navbar lng={lng} />
        {children}
        <Footer lng={lng} />
      </div>
      <Toaster />
    </div>
  )
}
