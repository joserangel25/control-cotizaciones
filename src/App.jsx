import { useState } from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

import PrivateRoute from './layout/PrivateRoute';
import PublicRoute from './layout/PublicRoute';
import Login from './pages/public/Login';
import Avisos from './pages/private/Avisos';
import Cotizaciones from './pages/private/Cotizaciones';
import DetalleCotizacion from './pages/private/DetalleCotizacion';
import Emisiones from './pages/private/Emisiones';
import NuevaCotizacion from './pages/private/NuevaCotizacion';
import Agencias from './pages/admin/Agencias';
import LayoutPrivate from './pages/private/LayoutPrivate';
import Usuarios from './pages/admin/Usuarios';


function App() {

  const [ cotizaciones, setCotizaciones ] = useState( JSON.parse(localStorage.getItem('cotizaciones')) ?? []);
  const [ modal, setModal ] = useState(false);
  const [ editCotizacion, setEdiCotizaion ] = useState({});


  const [ busqueda, setBusqueda ] = useState([]);
  const [ filtrado, setFiltrado ] = useState([]);

  // useEffect(() => {
  //   if(!cotizaciones.length){
  //     localStorage.setItem('cotizaciones', JSON.stringify([]))
  //     return
  //   }
  //   localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones))
    
  // }, [cotizaciones])
  
  // useEffect(() => {
  //   if(Object.keys(editCotizacion).length > 0){
  //     setModal(true)
  //   }
  // }, [editCotizacion])

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route index element={<Login />} />
        </Route>

        {/* <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='avisos' element={<Avisos />} />
          <Route path='cotizaciones' element={<Cotizaciones />} />
          <Route path='emisiones' element={<Emisiones />} />
          <Route path='nueva-cotizacion' element={<NuevaCotizacion />} />
          <Route path='ver-cotizacion/:id' element={<DetalleCotizacion />} />
          <Route path='editar-cotizacion/:id' element={<NuevaCotizacion />} />
          <Route path='agencias' element={<Agencias />} />
        </Route> */}
      <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='cliente' element={<LayoutPrivate />}>
            <Route index path='avisos' element={<Avisos />} />
            <Route path='cotizaciones' element={<Cotizaciones />} />
            <Route path='emisiones' element={<Emisiones />} />
            <Route path='nueva-cotizacion' element={<NuevaCotizacion />} />
            <Route path='ver-cotizacion/:id' element={<DetalleCotizacion />} />
            <Route path='editar-cotizacion/:id' element={<NuevaCotizacion />} />
          </Route>
          <Route path='admin' element={<LayoutPrivate />}>
            <Route path='agencias' element={<Agencias />} />
            <Route path='usuarios' element={<Usuarios />} />
          </Route>
        </Route>
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
