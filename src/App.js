import { Routes, Route, Link } from 'react-router-dom'
import Prueba from './components/Prueba';

function NavegacionAnidada() {
  return (
    <div>
      <h1>Navegación Anidada</h1>
      <ul>
        <li>
          <Link to="proyecto-1">Proyecto 1</Link>
        </li>
        <li>
          <Link to="proyecto-2">Proyecto 2</Link>
        </li>
      </ul>
      <section>
        <Routes>
          <Route path="proyecto-1" element={<h2>Proyecto 1</h2>}></Route>
          <Route path="proyecto-2" element={<h2>Proyecto 2</h2>}></Route>
        </Routes>
      </section>


    </div>
  );
}




function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/miscosas">Mis cosas</Link>
          </li>
          <li>
            <Link to="/portafolio/">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route exact path="/miscosas" element={<Prueba />}></Route>
          <Route path="/portafolio/*" element={<NavegacionAnidada />}></Route>
        </Routes>
      </section>
    </div>
  );
}
 
export default App;