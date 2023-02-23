import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import DetalleCliente from "../../components/dealleInteracciones/DetalleCliente"
import DetalleInteracciones from "../../components/dealleInteracciones/DetalleInteracciones"
import TitlePage from "../../components/TitlePage"
import { formatearFecha, formatearPrima } from "../../helpers"
import { obtenerCotizacion } from '../../store/slices/cotizacionesSlice'

import  { useGetCotizacionStoreQuery } from '../../store/api/cotizacionesApi'

export default function DetalleCotizacion() {
  // const { cotizacionAccion: cotizacion } = useSelector(state => state.cotizaciones)
  // console.log(cotizacion);
  const params = useParams()
  const  { data, isLoading, isError, Error } = useGetCotizacionStoreQuery(params.id)
  const dispatch = useDispatch()

 
  if(isLoading){
    return <p>Cargando...</p>
  }

  return (
    <>
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

        <p className="p-2 bg-sky-700 text-white font-bold text-lg shadow-md uppercase">{data?.cotizacion?.estado}</p>
      </div>
      
      <div className="w-full flex gap-4 mt-5 h-72">
        <div className="w-2/6 px-2 py-5 bg-stone-50 rounded-lg  shadow-md">
          <DetalleCliente observaciones={data?.cotizacion?.observaciones}/>
        </div>
        <div className="w-4/6 px-2 py-5 bg-stone-50 rounded-lg shadow-md ">
         <DetalleInteracciones interacciones={data?.interacciones}/>
        </div>
      </div>
    </>
  )
}
