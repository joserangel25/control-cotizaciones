import { useSelector } from 'react-redux'
import Alerta from '../../components/alerta/Alerta';

import Cotizacion from '../../components/listadoCotizaciones/Cotizacion'
import ListadoCotizaciones from '../../components/listadoCotizaciones/ListadoCotizaciones'
import { useTotal } from '../../hooks/useTotal';

export default function Cotizaciones() {
  const {  alerta } = useSelector(state => state.cotizaciones);
  const { totalOfertas, loading } = useTotal('Emitido');
  const { msg } = alerta; 
  return (
    <>
      <h2 className='font-black text-gray-700 text-4xl mb-5'>Emisiones</h2>
      { (!totalOfertas.length && !loading) && <Alerta alerta={{msg: 'No hay pólizas emitidas aún.'}} /> }
      {
        msg && <Alerta alerta={alerta} />
      }
      <ListadoCotizaciones>
        {
          totalOfertas.map(cotizacion => {
            return (<Cotizacion key={cotizacion._id} cotizacion={cotizacion} />)
          })
        }
      </ListadoCotizaciones>
    </>
  )
}
