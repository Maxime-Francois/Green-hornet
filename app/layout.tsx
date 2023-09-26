import  Navbar  from "./components/navbar/Navbar"
import {Nunito} from "next/font/google"
import './globals.css'
import Banner from "./components/home/Banner"
import Fleurs from "./components/home/Fleurs"
import Resine from "./components/home/Resine"
import Huile from "./components/home/Huile"
import Footer from "./components/Footer"
import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"

export const metadata = {
  title: 'GREEN HORNET CBD',
  description: 'CBD SHOP',
}

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser = {currentUser}/>
        </ClientOnly>
        {children}
          <Banner/>
        <Fleurs/>
        <Resine/>
        <Huile/>
        <Footer/>
        
        </body>
    </html>
  )
}
