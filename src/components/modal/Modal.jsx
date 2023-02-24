import { useState } from 'react'
import  { useSelector, useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { setModal } from '../../store/slices/modalSlice';
import InteraccionModal from './InteraccionModal';

export default function Modal() {

  const { isOpen, content } = useSelector(state => state.modal);
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
      >
        {
          (content === 'INTERACCION') && <InteraccionModal handleClose={handleClose} />
        }
      </Dialog>
    </div>
  );
}