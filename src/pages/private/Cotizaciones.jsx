import Cotizacion from '../../components/listadoCotizaciones/Cotizacion'
import ListadoCotizaciones from '../../components/listadoCotizaciones/ListadoCotizaciones'

import { COTIZACIONES_HARD } from '../../constants/cotizaciones'

export default function Cotizaciones() {
  return (
    <>
      <h2 className='font-black text-gray-700 text-4xl mb-5'>Cotizaciones</h2>
      <ListadoCotizaciones>
        {
          COTIZACIONES_HARD.map(cotizacion => (
            <Cotizacion key={cotizacion.id} cotizacion={cotizacion} />
          ))
        }
      </ListadoCotizaciones>
    </>
  )
}
