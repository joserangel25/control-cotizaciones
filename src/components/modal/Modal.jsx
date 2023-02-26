import { useState } from 'react'
import  { useSelector, useDispatch} from 'react-redux'
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { setModal } from '../../store/slices/modalSlice';
import InteraccionModal from './InteraccionModal';
import LoadingModal from './loadingModal';

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
        fullWidth
      >
        {
          (content === 'INTERACCION') && <InteraccionModal handleClose={handleClose} />
        }

        {
          (content === 'LOADING') && <Box sx={{
            width: 300,
            height: 300}}><LoadingModal /></Box>
        }
      </Dialog>
    </div>
  );
}