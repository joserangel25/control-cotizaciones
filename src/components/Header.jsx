import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header({cotizaciones, setBusqueda, showByState, filtrado: filtradoState}) {

  const navigate = useNavigate();

  const filtrarPlaca = (e) => {
    // console.log(e.target.value)
    const filtrado = filtradoState.find(cotizacion => cotizacion.placa.toLowerCase() == e.target.value.toLowerCase())
    if(filtrado){
      setBusqueda([filtrado])
    } else {
      setBusqueda([])
    }
  }

  const aplyShowByState = (path) => {
    // console.log(path)
    showByState(path)
    navigate(`/${path}`)
  }

  return (
    <header>
      <nav className='flex flex-col md:flex-row px-10 py-5 bg-indigo-300 items-center'>
        <ul className='flex justify-around gap-4 font-bold text-xl md:w-2/4 uppercase text-white '>
          {/* <Link to='/'>
            <li className='cursor-pointer p-2 hover:bg-slate-400'>Todos</li>
          </Link> */}
            <li 
              className='cursor-pointer p-2 hover:bg-slate-400'
              onClick={() => aplyShowByState('cotizado')}
            >
              Cotizados
            </li>

            <li 
              className='cursor-pointer p-2 hover:bg-slate-400'
              onClick={() => aplyShowByState('emitido')}
            >
              Emitidos
            </li>

        </ul>

        <div className='md:w-2/4 text-center'> 
          <input 
            className='p-2 bg-white rounded-lg w-1/2 '
            type='text'
            placeholder='Busca por placa'
            onChange={filtrarPlaca}
          
          />
        </div>
      </nav>
    </header>
  )
}
