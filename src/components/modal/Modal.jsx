import  { useSelector, useDispatch} from 'react-redux'
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { setModal } from '../../store/slices/modalSlice';
import InteraccionModal from './InteraccionModal';
import LoadingModal from './loadingModal';

export default function Modal() {

  const { isOpen, content, message } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch( setModal() )
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // fullWidth
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