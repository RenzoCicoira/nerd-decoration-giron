import NavBarDesktop from "./NavBarDesktop"
import NavBarMobile from "./NavBarMobile"
import { useEffect, useState } from "react"

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    if (window.visualViewport.width < 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    checkIsMobile()

    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])


  return(
    isMobile
      ? <NavBarMobile/> 
      : <NavBarDesktop />
  )
}

export default Navbar