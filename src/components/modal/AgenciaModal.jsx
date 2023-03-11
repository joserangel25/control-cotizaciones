import { useState } from "react"
import { useDispatch } from "react-redux"

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import CircularProgress from '@mui/material/CircularProgress';


//Redux
import { setModal } from '../../store/slices/modalSlice'
//RTK Query
import { useAgregarAgenciaApiMutation } from "../../store/api/adminApi"

export default function AgenciaModal({handleClose}) {

  const [nombre, setNombre] = useState('')
  const [ identificacion, setIdentificacion ] = useState(0)
  const dispatch = useDispatch()
  const [ agregarAgencia, resultsNewAgencia ] = useAgregarAgenciaApiMutation()

  const handleSubmitAgencia = async (e) => {
    e.preventDefault();

    if(nombre === '' || identificacion === 0){
      alert('Todos los campos son obligatorios')
      return
    };

    await agregarAgencia({nombre, identificacion}).unwrap()
    dispatch( setModal({ isOpen: false, content: '', message: '' }) )
  }

  return (
    <div className="p-5 min-w[300px] max-w-[450px] flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="font-black text-2xl">Agregar Agencia</p>
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
          disabled={resultsNewAgencia.isLoading}
          endIcon={resultsNewAgencia.isLoading && <CircularProgress size={24} />}
        >
          Agregar
        </Button>
      </form>
    </div>
  )
}
