import './App.css'

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