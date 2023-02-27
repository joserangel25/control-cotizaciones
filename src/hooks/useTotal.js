import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

export const useTotal = (estado) => {

  const { cotizaciones } = useSelector(state => state.cotizaciones)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(cotizaciones.length){
      const newTotal = cotizaciones.filter(coti => coti.estado === estado)
      setTotal(newTotal.length)
    }

  }, [cotizaciones])
  
  
  return {
    total
  }
}

