import logo from '../../assets/logoAlienND.jpg'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const NavBarMobile = () => {

  const [ showMenu, setShowMenu ] = useState(false)

  const handleClick = () => {
    if (showMenu === false){
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  return (
    <nav className="flex flex-col bg-nav px-4 ">
      <div className='flex justify-between items-center'>
        <Link to="/"><img src={logo} alt="logo" className="w-20"/></Link>
        <Link to='/cart'><CartWidget/></Link>
        <button onClick={handleClick} className='text-white text-3xl'><GiHamburgerMenu /></button>
      </div>
      {
        showMenu && 
        <div className='flex flex-col items-center'>
          <Link to="/" className="p-2 text-2xl no-underline text-orange-50 hover:text-orange-500">Inicio</Link>
          <Link to="/category/decoración" className="p-2 text-2xl no-underline text-orange-50 hover:text-orange-500">Decoración</Link>
          <Link to="/category/vajilla" className="p-2 text-2xl no-underline text-orange-50 hover:text-orange-500">Vajilla</Link>
          <Link to="/category/stickers" className="p-2 text-2xl no-underline text-orange-50 hover:text-orange-500">Stickers</Link>
          <Link to="/category/textil" className="p-2 text-2xl no-underline text-orange-50 hover:text-orange-500">Textil</Link>
        </div>
      }
      
    </nav>
  )
}

export default NavBarMobile