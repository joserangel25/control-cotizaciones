import  { useSelector, useDispatch} from 'react-redux'
import Dialog from '@mui/material/Dialog';
import { setModal } from '../../store/slices/modalSlice';
import InteraccionModal from './InteraccionModal';
import LoadingModal from './LoadingModal';

export default function Modal() {

  const { isOpen, content, message } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
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
          (content === 'LOADING') && <LoadingModal message={message} />
        }
      </Dialog>
    </div>
  );
}