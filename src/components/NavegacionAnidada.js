import React from 'react';
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
            <Route path="proyecto-1" element={<h2>Proyecto 1</h2>}></Route>
            <Route path="proyecto-2" element={<h2>Proyecto 2</h2>}></Route>
          </Routes>
        </section>
  
  
      </div>
    );
  }


  export default NavegacionAnidada