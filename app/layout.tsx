import  Navbar  from "./components/navbar/Navbar"
import { Kanit } from "next/font/google"
import './globals.css'
import Footer from "./components/Footer"
import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"
import CartProvider from "./providers/CartProvider"
import { Metadata } from "next"

const kanit = Kanit({subsets: ['latin'], weight:["400"]})


export const metadata: Metadata = {
  title: "GREEN HORNET CBD",
  description: "CBD SHOP",
  icons: {
    icon:['favicon/favicon.ico?v=4'],
    apple: ['favicon/apple-touch-icon.png?v=4'],
    shortcut: ['favicon/apple-touch-icon.png']
  }
  
};

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={kanit.className}>
          <ToasterProvider/> 
          <CartProvider>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser = {currentUser}/>
        {children}
        <Footer/>
         </CartProvider>
        </body>
    </html>
  )
}
