import Body from './_components/Body'
import Footer from './_components/Footer'
import Menu from './_components/HamburgerMenu'
import Navbar from './_components/Navbar'

export default function Home() {
  return (
    <div className='outer-wrapper'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}