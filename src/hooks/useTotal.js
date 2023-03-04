import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

export const useTotal = (estado) => {

  const { cotizaciones } = useSelector(state => state.cotizaciones)
  const [total, setTotal] = useState(0);
  const [totalOfertas, setTotalOfertas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(cotizaciones.length){
      const newTotal = cotizaciones.filter(coti => coti.estado === estado)
      setTotal(newTotal.length)
      setTotalOfertas(newTotal)
      setLoading(false)
    }

  }, [cotizaciones])
  
  
  return {
    total,
    loading,
    totalOfertas
  }
}

