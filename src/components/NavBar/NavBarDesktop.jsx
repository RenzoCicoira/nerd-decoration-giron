import logo from '../../assets/logoAlienND.jpg'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'

const NavBarDesktop = () => {
  return (
    <nav className="flex bg-nav px-4 justify-between items-center">
      <Link to="/"><img src={logo} alt="logo" className="w-20"/></Link>
      <Link to="/" className="text-xl no-underline text-orange-50 hover:text-orange-500">Inicio</Link>
      <Link to="/category/decoración" className="text-xl no-underline text-orange-50 hover:text-orange-500">Decoración</Link>
      <Link to="/category/vajilla" className="text-xl no-underline text-orange-50 hover:text-orange-500">Vajilla</Link>
      <Link to="/category/stickers" className="text-xl no-underline text-orange-50 hover:text-orange-500">Stickers</Link>
      <Link to="/category/textil" className="text-xl no-underline text-orange-50 hover:text-orange-500">Textil</Link>
      <Link className='' to='/cart'><CartWidget /></Link>
    </nav>
  )
}

export default NavBarDesktop