import React from 'react';
import Proyecto from './Proyecto';
import {Link, Routes, Route} from 'react-router-dom'

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
            <Route path=":proyecto_id" element={<Proyecto />}></Route>
          </Routes>
        </section>
  
  
      </div>
    );
  }


  export default NavegacionAnidada