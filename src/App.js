import { Routes, Route, Link } from 'react-router-dom'
import Prueba from './components/Prueba';
import NavegacionAnidada from './components/NavegacionAnidada';

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