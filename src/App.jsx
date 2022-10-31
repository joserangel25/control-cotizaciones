import { useState, useEffect } from 'react'
import ButtonAdd from './components/ButtonAdd'
import Header from './components/Header'
import Modal from './components/Modal';
import RowInformation from './components/RowInformation'
import { generarId } from './helpers';


function App() {

  const [ cotizaciones, setCotizaciones ] = useState( JSON.parse(localStorage.getItem('cotizaciones')) ?? []);
  const [ modal, setModal ] = useState(false);
  const [ editCotizacion, setEdiCotizaion ] = useState({});

  const [ busqueda, setBusqueda ] = useState([]);

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

  return (
    <>
    <Header cotizaciones={cotizaciones} setBusqueda={setBusqueda}/>
    <main className="">
      <div className="flex flex-col py-10 px-20">
        {
          !cotizaciones.length && 
              <p className='text-white text-3xl text-center font-black'>No hay cotizaciones en la lista</p>
        }

        {
          (cotizaciones.length > 0 && !busqueda.length) && 
          cotizaciones.map(cotizacion =>  <RowInformation 
                                            key={cotizacion.id} 
                                            setModal={setModal} 
                                            cotizacion={cotizacion}
                                            setEdiCotizaion={setEdiCotizaion} 
                                          />)
          
          
        }
        {
          (busqueda.length > 0 ) && busqueda.map(cotizacion =>  <RowInformation 
            key={cotizacion.id} 
            setModal={setModal} 
            cotizacion={cotizacion}
            setEdiCotizaion={setEdiCotizaion} 
          />)
        }
      </div>
    </main>
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
