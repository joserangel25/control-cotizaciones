import { useSelector } from "react-redux"
import DetalleCliente from "../../components/dealleInteracciones/DetalleCliente"
import DetalleInteracciones from "../../components/dealleInteracciones/DetalleInteracciones"
import TitlePage from "../../components/TitlePage"
import { formatearPrima } from "../../helpers"


export default function DetalleCotizacion() {
  const { cotizacionAccion: cotizacion } = useSelector(state => state.cotizaciones)

  if(!cotizacion.id) (<p>Cargando...</p>)
  return (
    <>
      <TitlePage detalle={`${cotizacion.nombreAsegurado} - ${cotizacion.placa}`} /> 
      
      <div className='flex items-center justify-between'>
        <div>
        <p className="font-bold">Fecha de cotización: 
          <span className="font-normal"> {cotizacion.fechaCotizacion}</span>
        </p>
        <p className="font-bold">Mejor opción: 
          <span className="font-normal"> {cotizacion.mejorAseguradora} - {formatearPrima(cotizacion.prima)}</span>
        </p>
        </div>

        <p className="p-2 bg-sky-700 text-white font-bold text-lg shadow-md uppercase">{cotizacion.estado}</p>
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
