import logo from '../assets/logoNerDecoration.png'
import CartWidget from './atoms/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="flex bg-nav p-2 justify-between items-center">
      <Link to="/"><img src={logo} alt="logo" className="w-12"/></Link>
      <Link to="/" className="no-underline text-orange-50 hover:text-orange-500">Inicio</Link>
      <Link to="/category/decoración" className="no-underline text-orange-50 hover:text-orange-500">Decoración</Link>
      <Link to="/category/vajilla" className="no-underline text-orange-50 hover:text-orange-500">Vajilla</Link>
      <Link to="/category/stickers" className="no-underline text-orange-50 hover:text-orange-500">Stickers</Link>
      <Link to="/category/textil" className="no-underline text-orange-50 hover:text-orange-500">Textil</Link>

      {/* <Link to="/nosotros" className="no-underline text-gray-100 hover:text-gray-800">Nosotros</Link>
      <Link to="/contacto" className="no-underline text-gray-100 hover:text-gray-800">Contacto</Link> */}
      <Link className='' to='/cart'><CartWidget /></Link>
    </nav>
  )
}

export default Navbar