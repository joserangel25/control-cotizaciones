import React from 'react'

export default function ListadoCotizaciones({ children }) {
  return (
    <ul className='w-full flex flex-col gap-2 h-[300px] overflow-x-hidden'>
      { children }
    </ul>
  )
}
