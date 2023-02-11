import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { agregarCotizacion, editarCotizacion, quitarCotizacionObtenida } from '../store/slices/cotizacionesSlice'
import { generarId } from '../helpers'

export function useFormulario() {

  const { cotizacionAccion: cotizacion } = useSelector(state => state.cotizaciones)
  const dispatch = useDispatch()  
  const navigate = useNavigate()

  //datos del formulario
  const [ datos, setDatos ] = useState({
    nombreAsegurado: '',
    placa: '',
    fechaCotizacion: '',
    mejorAseguradora: '',
    estado: '',
    prima: ''
  });

  useEffect(() => {
    if(cotizacion.id){
      setDatos(cotizacion)
    }
  }, [])
  
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

    if(cotizacion.id){
      dispatch( editarCotizacion({...datos, id: cotizacion.id}) )
    } else {
      dispatch( agregarCotizacion({...datos, id: generarId()}) )
    }

    navigate('/dashboard/cotizaciones')

  }

  return {
    changeDatos,
    handleSubmit,
    datos
  }
}
