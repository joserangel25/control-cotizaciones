import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useGetCotizacionesQuery } from '../store/api/cotizacionesApi';
import { setCotizacionesStore } from '../store/slices/cotizacionesSlice';

export const useTotal = (estado) => {

  const dispatch = useDispatch()
  // const { cotizaciones } = useSelector(state => state.cotizaciones)
  const { data: cotizaciones, isLoading, isError } = useGetCotizacionesQuery()
  const [total, setTotal] = useState(0);
  const [totalOfertas, setTotalOfertas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(cotizaciones?.length && !isLoading){
      dispatch( setCotizacionesStore(cotizaciones) )
      const newTotal = cotizaciones.filter(coti => coti.estado === estado)
      setTotal(newTotal.length)
      setTotalOfertas(newTotal)
      setLoading(false)
    }

  }, [cotizaciones])
  useEffect(() => {
    if(!isLoading){
      setLoading(false)
    }

  }, [isLoading])
  
  return {
    total,
    isLoading,
    loading,
    totalOfertas
  }
}
