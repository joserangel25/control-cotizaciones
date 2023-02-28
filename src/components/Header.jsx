import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AcountMenu from './acountMenu/AcountMenu';

export default function Header({setBusqueda, showByState, showMenu, filtrado: filtradoState}) {

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

  return (
    <header className='bg-gray-50 px-10 py-5 flex justify-between shadow-lg shadow-stone-200/50'>

      <div className='flex gap-2 items-center'>
        <button
          onClick={showMenu} 
          className='text-xl font-bold cursor-pointer md:hidden'
        >
          x
        </button>
        <figure className='w-40'>
          <img src="https://i0.wp.com/segurosjd.com/wp-content/uploads/2020/07/LogoJD2.fw_.png?w=305&ssl=1" alt="logo de JD empresa" />
        </figure>
      </div>
      <AcountMenu />
    </header>
  )
}