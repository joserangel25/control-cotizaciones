import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCrearInteraccionStoreMutation } from '../../store/api/cotizacionesApi';
import { setAlerta } from '../../store/slices/cotizacionesSlice';

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
  const [disable, setDisable] = useState(false)
  const dispatch = useDispatch()
  const [agregarInteraccion, result] = useCrearInteraccionStoreMutation()

  const handleAgregar = async () => {
    if([descripcion, fecha].includes('')){
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 1000);
      return
    }

    setDisable(true)

    try {
      console.log({ descripcion, fecha, idCotizacion})
      const res = await  agregarInteraccion({descripcion, fecha, cotizacion: idCotizacion}).unwrap()
      console.log(res)
      setDisable(false)
      handleClose()
      dispatch( setAlerta({msg: 'Se guardó correctamente!'}) )

      
    } catch (error) {
      console.log(error)
    }

    setTimeout(() => {
      dispatch( setAlerta({}) )
    }, 1500);

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
        disabled={disable}
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
        disabled={disable}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        error={error}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color='error'>Cancelar</Button>
      <Button 
        onClick={handleAgregar} 
        autoFocus 
        disabled={disable} 
        endIcon={disable && <CircularProgress size={24} />}
      >
        Agregar
      </Button>
    </DialogActions>
    </>
  )
}
