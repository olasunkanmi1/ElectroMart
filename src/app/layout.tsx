import './globals.css'
import { Navbar, Footer } from '@components'
import { ReduxProvider } from '../redux/provider'

export const metadata = {
  title: 'ElectroMart | Online Shopping for ELectronics!',
  description: 'Your one-stop online marketplace for quality electronics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <body>
            <ReduxProvider>
              <div className='w-full min-h-[calc(100vh-250px)] ft:min-h-[calc(100vh-195px)] ft2:min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-120px)] space-y-8 mb-8'>
                <Navbar />
                {children}
              </div>
              
              <Footer />
            </ReduxProvider>
          </body>
      </html>
  )
}
