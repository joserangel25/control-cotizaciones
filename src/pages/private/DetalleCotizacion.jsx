
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';


import DetalleCliente from "../../components/dealleInteracciones/DetalleCliente"
import DetalleInteracciones from "../../components/dealleInteracciones/DetalleInteracciones"
import TitlePage from "../../components/TitlePage"
import { formatearFecha, formatearPrima } from "../../helpers"
import Alerta from '../../components/alerta/Alerta'

import  { useGetCotizacionStoreQuery } from '../../store/api/cotizacionesApi'

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
      
      <div className='flex items-center justify-between bg-stone-50'>
        <div className="ml-2">
          <p className="font-bold">Fecha de cotización: 
            <span className="font-normal"> {formatearFecha(data?.cotizacion?.fecha)}</span>
          </p>
          <p className="font-bold">Mejor opción: 
            <span className="font-normal"> {data?.cotizacion?.mejorAseguradora} - {formatearPrima(data?.cotizacion?.prima)}</span>
          </p>
        </div>

        <p className={`${data?.cotizacion?.estado == 'Cotizado' ? 'bg-sky-700' : 'bg-green-600'} p-2 text-white font-bold text-lg shadow-md uppercase`}>
          {data?.cotizacion?.estado}
        </p>
      </div>
      
      <div className="w-full flex gap-4 mt-5 h-72">
        <div className="w-2/6 px-2 py-5 bg-stone-50 rounded-lg  shadow-md">
          <DetalleCliente 
            observaciones={data?.cotizacion?.observaciones}
            referido={data?.cotizacion?.referido}
          />
        </div>
        <div className="w-4/6 px-2 py-5 bg-stone-50 rounded-lg shadow-md ">
         <DetalleInteracciones interacciones={data?.interacciones}/>
        </div>
      </div>
    </>
  )
}
