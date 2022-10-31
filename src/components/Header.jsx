import React from 'react'

export default function Header({cotizaciones, setBusqueda}) {

  const filtrarPlaca = (e) => {
    // console.log(e.target.value)
    const filtrado = cotizaciones.find(cotizacion => cotizacion.placa.toLowerCase() == e.target.value.toLowerCase())
    if(filtrado){
      setBusqueda([filtrado])
    } else {
      setBusqueda([])
    }
  }

  return (
    <header>
      <nav className='flex flex-col md:flex-row px-10 py-5 bg-indigo-300 items-center'>
        <ul className='flex justify-around gap-4 font-bold text-xl md:w-2/4 uppercase text-white '>
          <li className='cursor-pointer p-2 hover:bg-slate-400'>Todos</li>
          <li className='cursor-pointer p-2 hover:bg-slate-400'>Emitidos</li>
          <li className='cursor-pointer p-2 hover:bg-slate-400'>Pendiente</li>
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
