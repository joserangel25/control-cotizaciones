import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function NewAlerta() {
  const { alerta } = useSelector(state => state.cotizaciones);
  const { isOpen, message, type } = alerta
  return (
    <Snackbar open={isOpen} autoHideDuration={3000}>
      <Alert severity={type} sx={{ width: '100%' }}>
      {message}
      </Alert>
    </Snackbar>
  )
}