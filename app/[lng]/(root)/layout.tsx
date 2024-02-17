import { Navbar, Footer } from '../../../components/index'
import { Toaster } from '@/components/ui/toaster'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='bg-main-background min-h-screen bg-cover bg-fixed bg-center bg-no-repeat '>
      <div className='text-bone min-h-screen backdrop-blur-md'>
        <Navbar />
        {children}
        <Footer />
      </div>
      <Toaster />
    </div>
  )
}
