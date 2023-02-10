import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuVerticalDashboard() {
  return (
      <nav className='flex flex-col gap-2'>
        <Link to='/dashboard'>Avisos</Link>
        <Link to='/dashboard/cotizaciones'>Cotizaciones</Link>
      </nav>
  )
}
