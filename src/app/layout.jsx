import { Gabarito} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Utilities/Navbar'
import Footer from '@/components/Utilities/Footer/Footer'
import UserActionButton from '@/components/Utilities/Menu/userActionButton'
import SideMenu from '@/components/Utilities/SideMenu/SideMenu'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'BarudakAnimeList',
  description: 'Website anime indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${gabarito}.className dark:bg-colos-sidebarColor bg-colos-accent`} suppressHydrationWarning={true}>
        <Navbar />
        <UserActionButton className=""/>
        {children}  
        <SideMenu/>
        <Footer className="bg-colos-accent dark:bg-colos-sidebarColor" />
        </body>
    </html>
  )
}
