import { useNavigate } from 'react-router';


import { Menu, MenuItem, Avatar, Divider, ListItemIcon } from '@mui/material'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

//Redux
import { useDispatch } from 'react-redux';
import { cotizacionesApi } from '../../store/api/cotizacionesApi';
import { logoutAction } from '../../store/slices/authSlice';
import { setModal } from '../../store/slices/modalSlice';

export default function MenuOptions({ open, handleClose, anchorEl }) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCerrarSesion = () => {
    handleClose()
    dispatch(setModal('LOADING'))
    //Con el siguiente dispatch invalidamos la query para la próxima consulta. Con el inicio de sesión
    //se debe volver a hacer la consulta sí o sí eliminando la caché para evitar error de información
    dispatch(cotizacionesApi.util.resetApiState())

    setTimeout(() => {
      dispatch(logoutAction())
      dispatch(setModal(''))

      navigate('/')
    }, 1500)
    
  }
  return (
    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleCerrarSesion}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
  )
}
