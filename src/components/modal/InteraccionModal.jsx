import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useCrearInteraccionStoreMutation } from '../../store/api/cotizacionesApi';

import { useAlerta } from '../../hooks/useAlerta';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function InteraccionModal({handleClose}) {
  const { id: idCotizacion} = useParams()
  const [descripcion, setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')
  const [error, setError] = useState(false)

  const [agregarInteraccion, result] = useCrearInteraccionStoreMutation()
  const { alertaExito, alertaError } = useAlerta()

  const handleAgregar = async () => {
    if([descripcion, fecha].includes('')){
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 1000);
      return
    }

    try {
      await  agregarInteraccion({descripcion, fecha, cotizacion: idCotizacion}).unwrap()
      alertaExito('Se agregó correctamente la interacción con el cliente!')
      
    } catch (error) {
      console.log(error)
      alertaError('Se presentó un error. Comunícate con el administrador!')
    }
    handleClose()

  }

  return (
    <>
    <DialogTitle id="alert-dialog-title">
      {"Registra un nuevo contacto con el cliente!"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Por favor indica la fecha y agrega una observación del contacto
      </DialogContentText>
      <TextField
        autoFocus
        margin="normal"
        id="name"
        label="Fecha Contacto"
        type="date"
        required
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        sx={{marginBottom: 2}}
        value={fecha}
        onChange={e => setFecha(e.target.value)}
        error={error}
      />
      <Divider />
      <TextField 
        label="Observacion"
        InputLabelProps={{
          shrink: true,
        }}
        multiline
        fullWidth
        rows={4}
        required
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        error={error}
      />
      <Divider />

      <DialogActions>
        <Button
          variant="contained" 
          onClick={handleClose} 
          color='error'>
          Cancelar
        </Button>
        <Button 
          onClick={handleAgregar} 
          autoFocus 
          disabled={result.isLoading}
          variant="contained"
          endIcon={result.isLoading && <CircularProgress size={24} />}
        >
          Agregar
        </Button>
      </DialogActions>
    </DialogContent>

    </>
  )
}
