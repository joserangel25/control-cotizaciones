import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ButtonAdd from './components/ButtonAdd'
import Header from './components/Header'
import Modal from './components/Modal';
import Principal from './components/Principal';
import { generarId } from './helpers';
import PrivateRoute from './layout/PrivateRoute';
import PublicRoute from './layout/PublicRoute';
import Login from './pages/Login';
import Avisos from './pages/private/Avisos';
import Cotizaciones from './pages/private/Cotizaciones';
import Emisiones from './pages/private/Emisiones';
import LayoutPrivate from './pages/private/LayoutPrivate';


function App() {

  const [ cotizaciones, setCotizaciones ] = useState( JSON.parse(localStorage.getItem('cotizaciones')) ?? []);
  const [ modal, setModal ] = useState(false);
  const [ editCotizacion, setEdiCotizaion ] = useState({});

  const [ busqueda, setBusqueda ] = useState([]);
  const [ filtrado, setFiltrado ] = useState([]);

  useEffect(() => {
    if(!cotizaciones.length){
      localStorage.setItem('cotizaciones', JSON.stringify([]))
      return
    }
    localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones))
    
  }, [cotizaciones])
  
  useEffect(() => {
    if(Object.keys(editCotizacion).length > 0){
      setModal(true)
    }
  }, [editCotizacion])
  

  const addCotizacion = (cotizacion) => {
    if(!cotizacion.id){
      cotizacion.id = generarId();
      setCotizaciones([...cotizaciones, cotizacion])
      console.log('cotización agregada')
    } else {
      const newCotizaciones = cotizaciones.map(stateCotizacion => stateCotizacion.id === cotizacion.id ? cotizacion : stateCotizacion)
      setCotizaciones(newCotizaciones)
      setEdiCotizaion({})
      console.log('cotizacion editada')
    }
  }

  const showByState = (path) => {
    setFiltrado([]);
    const newCotizaciones = cotizaciones.filter(cotizaciones => cotizaciones.estado === path)
    // console.log(newCotizaciones)
    setFiltrado(newCotizaciones)
  }

  return (
    <>
    <BrowserRouter>

        <Routes>
        {/* <Route path='/' element={ <Principal 
                                    cotizaciones={cotizaciones}
                                    busqueda={busqueda}
                                    setModal={setModal}
                                    setEdiCotizaion={setEdiCotizaion}
                                    filtrado={filtrado}
                                    showByState={showByState}
                                  />} 
        />
        <Route path='/emitido' element={ <Principal 
                                    cotizaciones={cotizaciones}
                                    busqueda={busqueda}
                                    setModal={setModal}
                                    setEdiCotizaion={setEdiCotizaion}
                                    filtrado={filtrado}
                                    showByState={showByState}
                                  />} 
        />

        <Route path='/cotizado' element={ <Principal 
                                            cotizaciones={cotizaciones}
                                            busqueda={busqueda}
                                            setModal={setModal}
                                            setEdiCotizaion={setEdiCotizaion}
                                            filtrado={filtrado}
                                            showByState={showByState}
                                          />} 
                /> */}
          <Route path='/' element={<PublicRoute />}>
            <Route index element={<Login />} />
          </Route>

          <Route 
            path='/dashboard' 
            element={<PrivateRoute />}>
            <Route path='avisos' element={<Avisos />} />
            <Route path='cotizaciones' element={<Cotizaciones />} />
            <Route path='emisiones' element={<Emisiones />} />
          </Route>
        </Routes>  
      
    </BrowserRouter>
    
    <ButtonAdd setModal={setModal}/>

    { modal && <Modal 
                  setModal={setModal} 
                  addCotizacion={addCotizacion} 
                  editCotizacion={editCotizacion}
                  setEdiCotizaion={setEdiCotizaion} 
                /> }
    </>
  )
}

export default App
