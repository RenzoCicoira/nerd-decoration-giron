
const Navbar = () => {
  return(
    <nav className="flex bg-orange-400 p-2 justify-between items-center">
      <img src="/logoNerDecoration.png" alt="logo" className="w-12"/>
      <a className="no-underline text-gray-500 hover:text-gray-800" href="#">Inicio</a>
      <a className="no-underline text-gray-500 hover:text-gray-800" href="#">Productos</a>
      <a className="no-underline text-gray-500 hover:text-gray-800" href="#">Nosotros</a>
      <a className="no-underline text-gray-500 hover:text-gray-800" href="#">Contacto</a>
    </nav>
  )
}

export default Navbar