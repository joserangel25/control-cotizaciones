import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { quitarCotizacionObtenida } from '../store/slices/cotizacionesSlice'

export default function TitlePage({title, detalle = null}) {
  const dispatch = useDispatch()
  const navigate= useNavigate()

  const hadndleClick = () => {
    dispatch( quitarCotizacionObtenida() )
    navigate('/dashboard/cotizaciones')
  }
  return (
    <div className='flex justify-between items-center'>
        <h2 className='font-black text-gray-700 text-4xl mb-5'>{ detalle ?? title }</h2>

        {
          title  && 
          <button onClick={hadndleClick} className='font-bold text-red-700 flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>

            cancelar
          
          </button>
        }

        {
          detalle && 
          <button onClick={hadndleClick} className='font-bold text-sky-700 flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>

            Volver
          
          </button>
        }
      </div>
  )
}
