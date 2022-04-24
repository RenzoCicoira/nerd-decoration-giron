import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/molecules/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/molecules/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer';


const presentation = {
  title: 'Nerd Decoration',
  description: 'Tienda de decoración para aquellos que cambian el mundo: Los Nerds'
}


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <div className='text-white bg'>
          <Routes>
          <Route path='/' element={<ItemListContainer {...presentation}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer {...presentation}/>}/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/>}/>
            <Route path='*' element={ <Navigate to='/'/> }/>
            <Route path='/cart' element={ <Cart/> }/>
            <Route path='/checkout' element={ <Checkout /> }/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
