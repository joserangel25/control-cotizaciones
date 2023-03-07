import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTotal } from '../../hooks/useTotal'

//MUI
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import FactorySharpIcon from '@mui/icons-material/FactorySharp';

export default function VerticalMenu({showMenu}) {
  const { pathname } = useLocation()
  const { total: totalCotizado } = useTotal('Cotizado')
  const { total: totalEmitido } = useTotal('Emitido')

  const { auth } = useSelector(state => state.auth);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
        <List
        // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        sx={{ color: 'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      > 
        {
          (auth.rol === 'admin') ? (
            <>
              <div
                // className={`${pathname.includes('agencias') && 'bg-gray-100 text-gray-700'} group flex items-center rounded-lg text-white hover:bg-gray-100 hover:text-gray-700`}
              >

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <GppGoodOutlinedIcon color='info' />
                </ListItemIcon>
                <ListItemText primary="Admin"/>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              </div>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                <Link
                  to="/dashboard/admin/agencias"
                >
                  <ListItemButton >
                    <ListItemIcon sx={{paddingLeft: 2}}>
                      <FactorySharpIcon color='primary' fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary="Agencias"/>
                  </ListItemButton>
                </Link>

                <Link
                  to="/dashboard/admin/usuarios"
                >
                  <ListItemButton >
                    <ListItemIcon sx={{paddingLeft: 2}}>
                      <FactorySharpIcon color='primary' fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary="Usuarios"/>
                  </ListItemButton>
                </Link>

                </List>
              </Collapse>
            </>
          )
          :
          (
            <>
              <Link
                to="/dashboard/cliente/avisos"
              >
                <ListItemButton >
                  <ListItemIcon>
                  <NotificationsActiveOutlinedIcon color='primary' />
                  </ListItemIcon>
                  <ListItemText primary="Notificaciones"/>
                </ListItemButton>
              </Link>

              <Link
                to="/dashboard/cliente/cotizaciones"
              >
                <ListItemButton >
                  <ListItemIcon>
                    <AssignmentTurnedInOutlinedIcon color='primary' />
                  </ListItemIcon>
                  <ListItemText primary="Cotizaciones"/>
                </ListItemButton>
              </Link>

              <Link
                to="/dashboard/cliente/emisiones"
              >
                <ListItemButton >
                  <ListItemIcon>
                    <RequestPageOutlinedIcon color='primary' />
                  </ListItemIcon>
                  <ListItemText primary="Emisiones"/>
                </ListItemButton>
              </Link>
            </>
          )
        }
      </List>
    </>
  )
}
