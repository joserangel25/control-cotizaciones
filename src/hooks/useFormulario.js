import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { quitarCotizacionObtenida,
         setAlerta } from '../store/slices/cotizacionesSlice'
import { useRegistrarCotizacionMutation, useEditCotizacionStoreMutation } from '../store/api/cotizacionesApi'


export function useFormulario() {
  const [ registrarCotizacion, results ] = useRegistrarCotizacionMutation()
  const [ editarCotizacionApi, resultsEditar ] = useEditCotizacionStoreMutation()
  const { cotizacionAccion: cotizacion } = useSelector(state => state.cotizaciones)
  const dispatch = useDispatch()  
  const navigate = useNavigate()

  const restablecerApp = () => {
    dispatch( quitarCotizacionObtenida() )
    navigate('/dashboard/cotizaciones')

    setTimeout(() => {
      dispatch(setAlerta({}))
    }, 3000);
}

  //datos del formulario
  const [ datos, setDatos ] = useState({
    cliente: '',
    placa: '',
    fecha: '',
    mejorAseguradora: '',
    estado: '',
    prima: '',
    observaciones: '',
    referido: ''
  });

  useEffect(() => {
    if(cotizacion._id){
      setDatos(cotizacion)
    }
  }, [])

  //Escuchando los cambios cuando se guarde una cotización en la base de datos
  useEffect(() => {
    if(results.status === 'fulfilled'){
      dispatch( setAlerta({isOpen: true, message: 'Se ha agregado correctamente la cotización', type: 'success'}))
      restablecerApp()
    }

  }, [results])

  //Escuchando los cambios cuando se edite una cotización en la base de datos
  useEffect(() => {
    if(resultsEditar.status === 'fulfilled'){
      dispatch( setAlerta({isOpen: true, message: 'Se ha actualizado correctamente la cotización', type: 'success'}))
      restablecerApp()
    }

  }, [resultsEditar])
  
  
  const changeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const [d1, d2, d3, d4, d5, d6, d7, d8] = Object.values(datos)
    if([d1,d2, d4, d6, d7, d8].includes('')){
      alert('Todos los campos son obligatorios')
      return
    }

    if(cotizacion._id){
      editarCotizacionApi({...datos, id: cotizacion._id})
    } else {
      const { fecha, estado, ...rest } = datos
      registrarCotizacion(rest)
    }


  }

  return {
    changeDatos,
    handleSubmit,
    datos,
    results,
    resultsEditar
  }
}
