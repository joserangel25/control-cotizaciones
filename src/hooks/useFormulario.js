import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { agregarCotizacion } from '../store/slices/cotizacionesSlice'
import { generarId } from '../helpers'

export function useFormulario() {

  const dispatch = useDispatch()  
  const navigate = useNavigate()
  const [ datos, setDatos ] = useState({
    nombreAsegurado: '',
    placa: '',
    fechaCotizacion: '',
    mejorAseguradora: '',
    estado: '',
    prima: ''
  });


  const changeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(datos).includes('')){
      alert('Todos los campos son obligatorios')
      return
    }

    dispatch( agregarCotizacion({...datos, id: generarId()}) )
    navigate('/dashboard/cotizaciones')
    //Por hacer
    // addCotizacion(datos)
    //LLevar hacia el listado de cotizaciones
    // setModal(false)
  }
  return {
    changeDatos,
    handleSubmit,
    datos
  }
}
