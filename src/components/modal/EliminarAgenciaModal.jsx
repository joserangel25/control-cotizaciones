
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import DialogTitle from '@mui/material/DialogTitle';
import { useAlerta } from '../../hooks/useAlerta';

//RTK Query
import { useEliminarAgenciaApiMutation } from '../../store/api/adminApi';


export default function AliminarAgenciaModal({message, handleClose}) {

  const  { alertaExito, restablecerAlerta } = useAlerta()

  const { agencia } = useSelector(state => state.admin);

  const [ eliminarAgencia, resultsEliminar ] = useEliminarAgenciaApiMutation()

  const handleClickEliminarAgencia = async (id) => {
    try {
      await eliminarAgencia(id).unwrap()
      handleClose()
      alertaExito('Se eleminó la agencia correctamente!')
      
    } catch (error) {
      console.log(error)
    } finally {
      handleClose()

      setTimeout(() => {
        restablecerAlerta()
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