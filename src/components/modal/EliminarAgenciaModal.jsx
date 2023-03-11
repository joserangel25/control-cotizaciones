import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import DialogTitle from '@mui/material/DialogTitle';
import { setAlerta } from '../../store/slices/cotizacionesSlice';


//RTK Query
import { useEliminarAgenciaApiMutation } from '../../store/api/adminApi';


export default function AliminarAgenciaModal({message, handleClose}) {

  const { agencia } = useSelector(state => state.admin);
  const dispatch = useDispatch()

  const [ eliminarAgencia, resultsEliminar ] = useEliminarAgenciaApiMutation()

  const handleClickEliminarAgencia = async (id) => {
    try {
      await eliminarAgencia(id).unwrap()
      handleClose()
      dispatch( setAlerta({ isOpen: true, message: 'Se eleminó la agencia correctamente!', type: 'success' }) )
      
    } catch (error) {
      console.log(error)
    } finally {
      handleClose()

      setTimeout(() => {
        dispatch( setAlerta({isOpen: false, message: '', type: 'info'}) )
      }, 1500);
    }
  }
  return (
    <>
        <DialogTitle>
          <p>{message} <span className='font-bold'>{agencia.nombre}</span></p>
        </DialogTitle>
        <DialogContent>
          Esta acción no se podrá rehacer.
        </DialogContent>
        <DialogActions>
          <Button 
            variant='contained' 
            color='error'
            onClick={handleClose}
          >
            Disagree
          </Button>
          <Button
            variant='contained' 
            onClick={() => handleClickEliminarAgencia(agencia._id)}
            disabled={resultsEliminar.isLoading}
            endIcon={resultsEliminar.isLoading && <CircularProgress size={24} />}
          >
            Aceptar
          </Button>
        </DialogActions>

    </>
  );
}