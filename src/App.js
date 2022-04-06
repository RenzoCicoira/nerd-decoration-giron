import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/molecules/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/molecules/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';


const presentation = {
  title: 'Nerd Decoration',
  description: 'Tienda de Decoration para aquellos que cambian el mundo: Los Nerds'
}


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <div className='bg-stone-700 text-white'>
          <Routes>
          <Route path='/' element={<ItemListContainer {...presentation}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer {...presentation}/>}/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/>}/>
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='*' element={ <Navigate to='/'/> }/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
