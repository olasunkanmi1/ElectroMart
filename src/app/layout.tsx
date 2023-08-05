import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import { ReduxProvider } from '../redux/provider'
import Wrapper from '../components/layout'

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
        <NextTopLoader showSpinner={false} />
        <ReduxProvider>
          <Wrapper> {children} </Wrapper>
        </ReduxProvider>
      </body>
      </html>
  )
}
