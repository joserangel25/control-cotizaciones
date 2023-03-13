import { useParams } from "react-router-dom"
import OutletWrapper from "../../components/outletWrapper/OutletWrapper"
import CircularProgress from "@mui/material/CircularProgress"
import { useGetAgenciaByIdQuery } from "../../store/api/adminApi"
import UsuariosAgencia from "../../components/agencias/UsuariosAgencia"
export default function DetalleAgencia() {
  const { id } = useParams()
  const { data: agencia, isError, isLoading, isSuccess, status } = useGetAgenciaByIdQuery(id)

  if(isLoading){
    return (
      <div className='w-full flex justify-center'>
        <CircularProgress size={30} />
      </div>
    )
  }
  if(!isLoading){
    return (
      <OutletWrapper title={`${agencia.nombre}`}>
        <div className='h-1/2'>
         <h3 className="font-bold text-lg text-gray-700 border-b-2">Cotizaciones de la agencia</h3>
          <p>Lista de cotizaciones ...</p>
        </div>
        
        <div className='h-1/2'>
          <UsuariosAgencia agencia={agencia} />
        </div>
      </OutletWrapper>
    )
  }
}
