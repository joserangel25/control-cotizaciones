import React from 'react'
import { formatearPrima } from '../helpers';
import Estado from './Estado';

export default function RowInformation({cotizacion, setModal, setEdiCotizaion}) {
  const { nombre, aseguradora, prima, fecha, placa, estado } = cotizacion;

  const editCotizacion = () => {
    setEdiCotizaion(cotizacion)
  }
  
  return (
    <div className='w-full p-10 bg-slate-50 flex gap-4 mb-4 rounded-lg shadow-md items-center justify-around'>
      <div className='w-1/4  text-gray-800'>
        <p className='font-bold text-xl uppercase'>{nombre}</p>
        <p className='uppercase font-bold text-xl'>{placa}</p>
      </div>
      <p>{fecha}</p>
      <div className='text-center'>
        <p className='font-bold text-gray-700 uppercase text-lg'>{aseguradora}</p>
        <p className='font-bold text-gray-700'>{formatearPrima(prima)}</p>
      </div>

      <Estado estado={estado} />

      <div>
      <button 
        className='p-3 bg-indigo-500 rounded-md text-white uppercase font-bold mr-1 hover:bg-indigo-700 transition-colors'
        onClick={editCotizacion}
      >
        Editar
      </button>

      <button 
        className='p-3 bg-indigo-500 rounded-md text-white uppercase font-bold  hover:bg-indigo-700 
        transition-colors'
      >
        Ver
      </button>
      </div>

    </div>
  )
}
