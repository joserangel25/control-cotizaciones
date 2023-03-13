import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import DialogTitle from '@mui/material/DialogTitle';
import { useAlerta } from '../../hooks/useAlerta';

//RTK Query
import { useEliminarUsuarioAAgenciaApiMutation } from '../../store/api/adminApi';


export default function AliminarAgenciaModal({message, handleClose}) {

  const { id } = useParams()
  const { colaborador } = useSelector(state => state.admin)

  const  { alertaExito, alertaError, restablecerAlerta } = useAlerta()
  const [ eliminarColaborador, { data, isLoading, isError } ] = useEliminarUsuarioAAgenciaApiMutation()

  const handleClickEliminarUsuario = async () => {
    try {
      console.log({idAgencia: id, id: colaborador._id})
      await eliminarColaborador({idAgencia: id, id: colaborador._id}).unwrap()
      handleClose()
      alertaExito('Se eleminó el colaborador correctamente!')
      
    } catch (error) {
      console.log(error)
      handleClose()
      alertaError(error.data.message)
    } 
  }
  return (
    <>
        <DialogTitle>
          <p>{message}</p>
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
            Cancelar
          </Button>
          <Button
            variant='contained' 
            onClick={handleClickEliminarUsuario}
            disabled={isLoading}
            endIcon={isLoading && <CircularProgress size={24} />}
          >
            Aceptar
          </Button>
        </DialogActions>

    </>
  );
}