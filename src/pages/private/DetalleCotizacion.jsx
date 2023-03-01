
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"


import DetalleCliente from "../../components/dealleInteracciones/DetalleCliente"
import DetalleInteracciones from "../../components/dealleInteracciones/DetalleInteracciones"
import TitlePage from "../../components/TitlePage"
import { formatearFecha, formatearPrima } from "../../helpers"
import Alerta from '../../components/alerta/Alerta'

import  { useGetCotizacionStoreQuery } from '../../store/api/cotizacionesApi'

//MUI
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';

export default function DetalleCotizacion() {

  const params = useParams()
  const  { data, isLoading, isError, Error } = useGetCotizacionStoreQuery(params.id)
  const { alerta } = useSelector(state => state.cotizaciones)

 
  if(isLoading){
    return (
      <div className='w-full flex justify-center'>
        <CircularProgress size={30} />
      </div>
    )
  }

  const { msg } = alerta;
  
  return (
    <>
    {
      msg && <Alerta alerta={alerta} />
    }
      <TitlePage detalle={`${data?.cotizacion.cliente} - ${data?.cotizacion.placa}`} /> 
      <div className="h-5/6 overflow-x-hidden scrollbar">

      <div 
        className='flex flex-col md:flex-row items-center justify-between bg-stone-50 p-2 gap-2 shadow-md rounded-lg'
      >

        <div className="ml-2">
          <p className="font-bold">Fecha de cotización: 
            <span className="font-normal"> {formatearFecha(data?.cotizacion?.fecha)}</span>
          </p>
          <p className="font-bold">Mejor opción: 
            <span className="font-normal"> {data?.cotizacion?.mejorAseguradora} - {formatearPrima(data?.cotizacion?.prima)}</span>
          </p>
        </div>

        <Chip 
          label={data?.cotizacion?.estado} 
          color={data?.cotizacion?.estado == 'Cotizado' ? 'primary' : 'success'}
        />
      </div>
      
      <div className="w-full flex flex-col md:flex-row gap-4 mt-5 h-72">
        <div className="md:w-2/6 px-2 py-5 bg-stone-50 rounded-lg shadow-md">
          <DetalleCliente 
            observaciones={data?.cotizacion?.observaciones}
            referido={data?.cotizacion?.referido}
          />
        </div>
        <div className="md:w-4/6 px-2 py-5 bg-stone-50 rounded-lg shadow-md ">
         <DetalleInteracciones interacciones={data?.interacciones}/>
        </div>
      </div>
      </div>

    </>
  )
}
