import React from 'react'

export default function Estado({estado}) {
  switch (estado) {
    case 'cotizado':
      return (
        <div className='min-w-[98px] text-center p-2 bg-indigo-500 uppercase font-bold text-l text-white rounded-md'>
          {estado}
        </div>
      )
    case 'emitido':
      return (
        <div className='min-w-[98px] text-center p-2 bg-green-500 uppercase font-bold text-l text-white rounded-md'>
          {estado}
        </div>
      )
    case 'desistido':
      return (
        <div className='min-w-[98px] text-center p-2 bg-red-500 uppercase font-bold text-l text-white rounded-md'>
          {estado}
        </div>
      )
  
    default:
      break;
  }
}
