import Cotizacion from "../listadoCotizaciones/Cotizacion"
import ListadoCotizaciones from "../listadoCotizaciones/ListadoCotizaciones"
import { useAgencia } from "../../hooks/useAgencia"

export default function CotizacionesAgencia() {
  const { agencia: { cotizaciones } } = useAgencia();

  return (
    <>
      <h3 className="font-bold text-lg text-gray-700 border-b-2 mb-2">Cotizaciones de la agencia</h3>
      {
        Boolean(cotizaciones?.length) ? 
        (
          <ListadoCotizaciones>
            {
              cotizaciones.map(cotizacionState => {
                return (<Cotizacion key={cotizacionState._id} cotizacion={cotizacionState} />)
              })
            }
          </ListadoCotizaciones>
        ) : <p className='text-center font-bold text-gray-700'>Esta agencia no tiene cotizaciones aún.</p>
      }
    </>
  )
}
