import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/molecules/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemDetailContainer from './components/molecules/ItemDetailContainer';
import Fetch from './components/Fetch';

const presentation = {
  title: 'Nerd Decoration',
  description: 'Tienda de Decoration para aquellos que cambian el mundo: Los Nerds'
}


function App() {
  return (
    <div>
      <nav className="App">
        <Navbar/>
      </nav>
      <div className='bg-stone-700 p-1 text-white'>
        <ItemListContainer {...presentation}/>
        <ItemDetailContainer />
        <Fetch/>
      </div>
    </div>
  )
}

export default App;
