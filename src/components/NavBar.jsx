import logo from '../assets/logoNerDecoration.png'
import CartWidget from './CartWidget'

const Navbar = () => {
  return(
    <nav className="flex bg-orange-500 p-2 justify-between items-center">
      <img src={logo} alt="logo" className="w-12"/>
      <a className="no-underline text-gray-100 hover:text-gray-800" href="#">Inicio</a>
      <a className="no-underline text-gray-100 hover:text-gray-800" href="#">Productos</a>
      <a className="no-underline text-gray-100 hover:text-gray-800" href="#">Nosotros</a>
      <a className="no-underline text-gray-100 hover:text-gray-800" href="#">Contacto</a>
      <CartWidget />
    </nav>
  )
}

export default Navbar