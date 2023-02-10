import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AcountMenu from './acountMenu/AcountMenu';

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
    <header className='bg-gray-50 px-10 py-5 flex justify-between shadow-lg shadow-stone-200/50'>
      <figure className='w-40'>
        <img src="https://i0.wp.com/segurosjd.com/wp-content/uploads/2020/07/LogoJD2.fw_.png?w=305&ssl=1" alt="logo de JD empresa" />
      </figure>

      {/* <div className='p-6 rounded-full bg-indigo-500'>
  
        </div>
          <div className='w-3/4 flex bg-red-50 justify-between'>
            <nav className='flex flex-col md:flex-row px-10 py-5 bg-indigo-300 items-center'>
            
            </nav>
      
          <div className='p-6 rounded-full bg-indigo-500'>
      
        </div>
      </div> */}
      <AcountMenu />
    </header>
  )
}


{/* <ul className='flex justify-around gap-4 font-bold text-xl md:w-2/4 uppercase text-white '>

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

        </ul> */}

        {/* <div className='md:w-2/4 text-center'> 
          <input 
            className='p-2 bg-white rounded-lg w-1/2 '
            type='text'
            placeholder='Busca por placa'
            onChange={filtrarPlaca}
          
          />
        </div> */}