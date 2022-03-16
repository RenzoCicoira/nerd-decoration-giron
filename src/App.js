import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const styles = {
  presentation: {
    padding: '1rem',
    backgroundColor: 'lightGray'
  }
}

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
      <div style={styles.presentation}>
        <ItemListContainer
        title={presentation.title}
        description={presentation.description}
        />
      </div>
    </div>
  )
}

export default App;
