import React from 'react';
import '../App.css'

function Prueba(props) {
    return (
        <div>
            <h1>Tabla componente Prueba</h1>
            <table>
                <tr>
                    <th>Columna 1</th>
                    <th>Columna 2</th>
                    <th>Columna 3</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
            </table>
        </div>
    );
}

export default Prueba;