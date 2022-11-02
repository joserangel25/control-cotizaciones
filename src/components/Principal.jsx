import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import RowInformation from './RowInformation'

export default function Principal({ filtrado, cotizaciones, busqueda, setModal, setEdiCotizaion, showByState }) {
  const location = useLocation()

  useEffect(() => {
    // console.log(location)
    if(!filtrado.length){
      if(location.pathname === '/cotizado'){
        showByState('cotizado')
      }
    }
  }, [cotizaciones])

  useEffect(() => {
    // console.log(location)
  }, [cotizaciones])

  
  
  return (
    <div className="flex flex-col py-10 px-20">
        {
          !filtrado.length && 
              <p className='text-white text-3xl text-center font-black'>No hay cotizaciones en la lista</p>
        }

        {
          (filtrado.length > 0 && !busqueda.length) && 
          filtrado.map(cotizacion =>  <RowInformation 
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
  )
}
