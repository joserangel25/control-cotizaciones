
import  { useSelector, useDispatch } from 'react-redux'
import Dialog from '@mui/material/Dialog';

import InteraccionModal from './InteraccionModal';
import LoadingModal from './LoadingModal';
import AgenciaModal from './AgenciaModal';
import EliminarAgenciaModal from './EliminarAgenciaModal.jsx'
import UsuarioAgenciaModal from './UsuarioAgenciaModal';
import EliminarUsuarioModal from './EliminarUsuario';

//RTK
import { seleccionarAgencia } from '../../store/slices/adminSlice';
import { setModal } from '../../store/slices/modalSlice';

export default function Modal() {

  const { isOpen, content, message } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch( seleccionarAgencia({}) )
    dispatch( setModal({isOpen: false, content: '', message: ''}) )
  };



  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
 

      >
        {
          (content === 'INTERACCION') && <InteraccionModal handleClose={handleClose} />
        }

        {
          (content === 'LOADING') && <LoadingModal message={message} handleClose={handleClose} />
        }

        {
          (content === 'AGENCY') && <AgenciaModal message={message} handleClose={handleClose} />
        }
        {
          (content === 'DELETE-AGENCY') && <EliminarAgenciaModal message={message} handleClose={handleClose} />
        }
        {
          (content === 'ADD-USUARIO-AGENCY') && <UsuarioAgenciaModal message={message} handleClose={handleClose} />
        }
        {
          (content === 'DELETE-USUARIO-AGENCY') && <EliminarUsuarioModal message={message} handleClose={handleClose} />
        }
      </Dialog>
    </div>
  );
}