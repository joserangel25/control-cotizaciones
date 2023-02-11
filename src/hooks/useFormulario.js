import { useState } from 'react'

export function useFormulario() {

  const [ datos, setDatos ] = useState({
    nombre: '',
    placa: '',
    fecha: '',
    aseguradora: '',
    estado: '',
    prima: ''
  })

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
