import './App.css'
import NavBar from './Components/NavBar';
import Inicio from './Pages/Inicio';
import ListaDeJuegos from './Pages/ListaDeJuegos';
import Saludo from './Pages/Saludo';
import Contacto from './Pages/Contacto';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './src/App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/Saludo' element={<Saludo/>}  />
              <Route path='/Inicio' element={<Inicio/>}  />
              <Route path='/Contacto' element={<Contacto/>}  />
              <Route path='/ListaDeJuegos' element={<ListaDeJuegos/>}  />
          </Routes>
        </div>
        <div>
        <footer>&copy; {new Date().getFullYear()} Gamer Ultimate Store. Todos los derechos reservados.</footer>
        </div>
      </Router>
    </div>
  )
}

export default App