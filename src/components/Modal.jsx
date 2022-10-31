import React, { useState, useEffect, useRef } from 'react'
import { ASEGURADORAS } from '../constants'

export default function Modal({setModal, addCotizacion, editCotizacion, setEdiCotizaion}) {

  const [ datos, setDatos ] = useState({
    nombre: '',
    placa: '',
    fecha: '',
    aseguradora: '',
    estado: '',
    prima: ''
  })

  const changeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(datos).includes('')){
      alert('Todos los campos son obligatorios')
      return
    }

    addCotizacion(datos)
    setModal(false)
  }

  useEffect(() => {
    topRef.current.scrollIntoView() 
    if(Object.values(editCotizacion).length){
      setDatos(editCotizacion)
    }
  }, [])

  const topRef = useRef();

  return (
    <section  ref={topRef} className='w-full h-full bg-slate-700 absolute top-0'>
      <h1         
        className='text-white font-black text-4xl text-center my-10'>{datos.id ? 'Editar cotización' : 'Agregar nueva cotización'}
      </h1>

      <div className='py-10 px-14 w-3/4 bg-white m-auto relative'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-3'>
            <div className='relative'>
              <label htmlFor='nombre' className='font-bold text-gray-500 mb-2'>Nombre asegurado:</label>
              <input 
                type='text'
                id='nombre'
                name='nombre'
                value={datos.nombre}
                onChange={changeDatos}
                className='w-full p-3 border-2  mt-1 rounded-md focus:outline-none focus:border-indigo-500 placeholder:text-gray-400 '
                placeholder="JOSE RANGEL"
              />
            </div>

            <div className=''>
              <label htmlFor='placa' className='font-bold text-gray-500 mb-2'>Placa:</label>
              <input 
                type='text'
                id='placa'
                name='placa'
                value={datos.placa}
                onChange={changeDatos}
                placeholder='FLL495'
                className='w-full p-3 border-2 mt-1 focus:border-indigo-500 rounded-md focus:outline-none placeholder:text-gray-400 '
              />
            </div>

            <div className=''>
              <label className='font-bold text-gray-500 mb-2'>Mejor aseguradora:</label>
              <select 
                name='aseguradora' 
                value={datos.aseguradora} 
                onChange={changeDatos} 
                className='w-full p-3 border-2 mt-1 focus:border-indigo-500 rounded-md focus:outline-none '
              >
                <option value='' className='text-gray-400 font-bold'>--Mejor aseguradora</option>
                {
                  ASEGURADORAS.map(aseguradora => (
                    <option 
                    key={aseguradora.id} 
                    value={aseguradora.nombre}                  
                    >
                      {aseguradora.nombre}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className=''>
              <label htmlFor='prima' className='font-bold text-gray-500 mb-2'>Valor de prima:</label>
              <input 
                type='number'
                id='prima'
                name='prima'
                value={datos.prima}
                onChange={changeDatos}
                placeholder='1.200.000'
                className='w-full p-3 border-2 mt-1 focus:border-indigo-500 rounded-md focus:outline-none placeholder:text-gray-400'
              />
            </div>

            <div className=''>
              <label htmlFor='fecha' className='font-bold text-gray-500 mb-2'>Fecha de cotización:</label>
              <input 
                type='date'
                id='fecha'
                name='fecha'
                value={datos.fecha}
                onChange={changeDatos}
                placeholder='fecha de cotizacion'
                className='w-full p-3 mt-1 border-2 focus:border-indigo-500 rounded-md focus:outline-none'
              />
            </div>

            <div className=''>
              <label className='font-bold text-gray-500 mb-2'>Estado:</label>
              <select 
                name='estado' 
                value={datos.estado} 
                onChange={changeDatos}
                className='w-full p-3 mt-1 border-2 focus:border-indigo-500 rounded-md focus:outline-none'
              >
                <option value=''>--Seleccionar</option>
                <option value='cotizado'>Cotizado</option>
                <option value='emitido'>Emitido</option>
                <option value='desistido'>Desistido</option>              
              </select>
            </div>

          </div>

          <input 
            type='submit'
            className='w-full p-3 mt-6 bg-indigo-500 rounded-md text-white uppercase font-bold mr-1 hover:bg-indigo-700 transition-colors cursor-pointer'
            value={datos.id ? 'Editar' : 'Agregar'}
          />
        </form>
      <button 
        className='text-white font-bold w-10 h-10 absolute top-5 right-10 bg-indigo-500 rounded-full' 
        onClick={() => {
          setModal(false)
          setEdiCotizaion({})
        }}
      >
          x
      </button>
      </div>
    </section>
  )
}
