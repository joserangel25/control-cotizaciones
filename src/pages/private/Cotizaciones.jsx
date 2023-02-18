import { useSelector } from 'react-redux'

import Cotizacion from '../../components/listadoCotizaciones/Cotizacion'
import ListadoCotizaciones from '../../components/listadoCotizaciones/ListadoCotizaciones'

export default function Cotizaciones() {
  const { cotizaciones } = useSelector(state => state.cotizaciones);

  return (
    <>
      <h2 className='font-black text-gray-700 text-4xl mb-5'>Cotizaciones</h2>
      { !cotizaciones.length && <p>No hay cotizaciones agregadas aún.</p>}
      <ListadoCotizaciones>
        {
          cotizaciones.map(cotizacion => (
            <Cotizacion key={cotizacion._id} cotizacion={cotizacion} />
          ))
        }
      </ListadoCotizaciones>
    </>
  )
}
