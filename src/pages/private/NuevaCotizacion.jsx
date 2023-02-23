import FormularioCotizacion from '../../components/formCotizacion/FormularioCotizacion'
import { useSelector } from 'react-redux';

import TitlePage from '../../components/TitlePage';

export default function NuevaCotizacion() {

  const { cotizacionAccion: cotizacion } = useSelector(state => state.cotizaciones)
  
  return (
    <>
      <TitlePage title={ cotizacion?._id ? 'Editar Cotizacion' : 'Agregar cotizacion' } /> 
      <FormularioCotizacion />
    </>
  )
}
