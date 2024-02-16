import { Navbar, Footer } from '../../components'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-screen bg-white dark:bg-nft-dark'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
