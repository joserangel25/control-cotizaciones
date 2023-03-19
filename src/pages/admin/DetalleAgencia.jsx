import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useGetAgenciaByIdQuery } from "../../store/api/adminApi"
import { useAgencia } from '../../hooks/useAgencia';

import OutletWrapper from "../../components/outletWrapper/OutletWrapper"
import UsuariosAgencia from "../../components/agencias/UsuariosAgencia"
import CotizacionesAgencia from '../../components/agencias/CotizacionesAgencia';

//MUI
import CircularProgress from "@mui/material/CircularProgress"

export default function DetalleAgencia() {
  const { id } = useParams()
  const { escogerAgencia } = useAgencia()
  const { data: agencia, isError, isLoading, isSuccess, status } = useGetAgenciaByIdQuery(id);

  useEffect(() => {
    if(agencia?._id){
      escogerAgencia(agencia)
    }
  }, [agencia])

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
         <CotizacionesAgencia  />
        </div>
        
        <div className='h-1/2'>
          <UsuariosAgencia agencia={agencia} />
        </div>
      </OutletWrapper>
    )
  }
}
