import { useSelector } from 'react-redux'
import Alerta from '../../components/alerta/Alerta';

import Cotizacion from '../../components/listadoCotizaciones/Cotizacion'
import ListadoCotizaciones from '../../components/listadoCotizaciones/ListadoCotizaciones'

export default function Cotizaciones() {
  const { cotizaciones, alerta } = useSelector(state => state.cotizaciones);

  const { msg } = alerta;
  return (
    <>
      <h2 className='font-black text-gray-700 text-4xl mb-5'>Cotizaciones</h2>
      { !cotizaciones.length && <Alerta alerta={{msg: 'No hay cotizaciones agregadas aún.'}} /> }
      {
        msg && <Alerta alerta={alerta} />
      }
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
