import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import DetalleCliente from "../../components/dealleInteracciones/DetalleCliente"
import DetalleInteracciones from "../../components/dealleInteracciones/DetalleInteracciones"
import TitlePage from "../../components/TitlePage"
import { formatearPrima } from "../../helpers"
import { obtenerCotizacion } from '../../store/slices/cotizacionesSlice'

export default function DetalleCotizacion() {
  const { cotizacionAccion: cotizacion } = useSelector(state => state.cotizaciones)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if(!cotizacion.id){
      dispatch( obtenerCotizacion(params.id) )
    }
  }, [])
 
  if(!cotizacion.id){
    return <p>Cargando...</p>
  }

  return (
    <>
      <TitlePage detalle={`${cotizacion.nombreAsegurado} - ${cotizacion.placa}`} /> 
      
      <div className='flex items-center justify-between bg-stone-50'>
        <div className="ml-2">
          <p className="font-bold">Fecha de cotización: 
            <span className="font-normal"> {cotizacion?.fechaCotizacion}</span>
          </p>
          <p className="font-bold">Mejor opción: 
            <span className="font-normal"> {cotizacion?.mejorAseguradora} - {formatearPrima(cotizacion?.prima)}</span>
          </p>
        </div>

        <p className="p-2 bg-sky-700 text-white font-bold text-lg shadow-md uppercase">{cotizacion?.estado}</p>
      </div>
      
      <div className="w-full flex gap-4 mt-5 h-72">
        <div className="w-2/6 px-2 py-5 bg-stone-50 rounded-lg  shadow-md">
          <DetalleCliente />
        </div>
        <div className="w-4/6 px-2 py-5 bg-stone-50 rounded-lg shadow-md ">
         <DetalleInteracciones />
        </div>
      </div>
    </>
  )
}
