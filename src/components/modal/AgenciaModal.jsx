import { useState, useEffect } from "react"
import { useAlerta } from "../../hooks/useAlerta"
import { useModal } from "../../hooks/useModal"
import { useAgencia } from "../../hooks/useAgencia"

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import CircularProgress from '@mui/material/CircularProgress';

//RTK Query
import { useAgregarAgenciaApiMutation, useEditarAgenciaApiMutation } from "../../store/api/adminApi"


export default function AgenciaModal({handleClose}) {

  const { alertaExito, alertaError } = useAlerta()
  const { agencia, escogerAgencia } = useAgencia()
  const { cerrarModal } = useModal()

  const [ nombre, setNombre] = useState('')
  const [ identificacion, setIdentificacion ] = useState(0)
  const [ agregarAgencia, resultsNewAgencia ] = useAgregarAgenciaApiMutation()
  const [ editarAgencia, { isLoading } ] = useEditarAgenciaApiMutation()

  useEffect(() => {
    if(agencia?._id){
      setNombre(agencia.nombre)
      setIdentificacion(agencia.identificacion)
    }
  }, [])

  const { _id } = agencia;  

  const handleSubmitAgencia = async (e) => {
    e.preventDefault();

    if(nombre === '' || identificacion === 0){
      alertaError('Todos los campos son obligatorios')
      return
    };

   try {
    if(_id){
      await editarAgencia({_id, nombre, identificacion}).unwrap()
      alertaExito('Se actualizó exitosamente la agencia!')

    } else {
      await agregarAgencia({nombre, identificacion}).unwrap()
      alertaExito('Se creó exitosamente la agencia!')
    }
    
   } catch (error) {
    alertaError('Se presentó un error, comuníquese con el administrador del servicio')
    console.log(error)
   }

   cerrarModal()
   escogerAgencia({})
  }

  return (
    <div className="p-5 min-w[300px] max-w-[450px] flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="font-black text-2xl text-gray-700">{_id ? 'Editar Agencia' : 'Agregar Agencia' }</p>
        <button onClick={handleClose} title='cerrar'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-sky-700" title='cerrar' >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
      </div>

      <form
        onSubmit={handleSubmitAgencia}
      >
        <TextField
          id="outlined-password-input"
          label="Nombre"
          type="text"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Identificacion"
          type="number"
          fullWidth
          margin="normal"
          value={identificacion === 0 ? '' : identificacion}
          onChange={(e) => setIdentificacion(Number(e.target.value))}

        />

        <Button 
          type='submit' 
          sx={{padding: '12px', marginTop: 1}}
          variant="contained"
          margin='normal'
          size="large"
          fullWidth
          disabled={resultsNewAgencia.isLoading || isLoading }
          endIcon={(resultsNewAgencia.isLoading || isLoading ) && <CircularProgress size={24} />}
        >
          {
            _id ? 'Guardar cambios' : 'Agregar'
          }
        </Button>
      </form>
    </div>
  )
}
