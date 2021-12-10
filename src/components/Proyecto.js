
 import { useMatch, useParams } from 'react-router-dom';
 
 const Proyecto = () => {
   const match = useMatch('/portafolio/:proyecto_id');
   const params = useParams();
   const { proyecto_id } = params;
   console.log({ match, params });
   return <h2>Proyecto: {proyecto_id}</h2>;
 };

export default Proyecto;