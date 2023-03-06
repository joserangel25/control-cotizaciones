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
          (auth.rol !== 'admin') && (
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
                  to="/dashboard/agencias"
                >
                  <ListItemButton >
                    <ListItemIcon sx={{paddingLeft: 2}}>
                      <FactorySharpIcon color='primary' fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary="Agencias"/>
                  </ListItemButton>
                </Link>

                </List>
              </Collapse>
            </>
          )
        }
        <Link
          to="/dashboard/avisos"
        >
          <ListItemButton >
            <ListItemIcon>
            <NotificationsActiveOutlinedIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Notificaciones"/>
          </ListItemButton>
        </Link>

        <Link
          to="/dashboard/cotizaciones"
        >
          <ListItemButton >
            <ListItemIcon>
              <AssignmentTurnedInOutlinedIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Cotizaciones"/>
          </ListItemButton>
        </Link>

        <Link
          to="/dashboard/emisiones"
        >
          <ListItemButton >
            <ListItemIcon>
              <RequestPageOutlinedIcon color='primary' />
            </ListItemIcon>
            <ListItemText primary="Emisiones"/>
          </ListItemButton>
        </Link>
      </List>
    
    <nav aria-label="Main Nav" className="flex flex-col space-y-1">
      {/* <NavLink
        to="/dashboard/avisos"
        className={`${pathname.includes('avisos') && 'bg-gray-100 text-gray-700'} group flex items-center rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <span className="ml-3 text-sm font-medium"> Notificaciones </span>
      </NavLink> */}

      {/* <Link
        to="/dashboard/cotizaciones"
        className={`${pathname.includes('cotizacion') && 'bg-gray-100 text-gray-700'} group flex items-center rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <span className="ml-3 text-sm font-medium"> Cotizaciones </span>

        <span
          className={`${pathname.includes('cotizacion') && 'bg-gray-200' } ml-auto shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600  group-hover:text-gray-700`}
        >
          {totalCotizado}
        </span>
      </Link> */}

      {/* <Link
        to="/dashboard/emisiones"
        className={`${pathname.includes('emisiones') && 'bg-gray-100 text-gray-700'} group flex items-center rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <span className="ml-3 text-sm font-medium"> Emisiones </span>

        <span
          className={`${pathname.includes('emisiones') && 'bg-gray-200' } ml-auto shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600  group-hover:text-gray-700`}
        >
          {totalEmitido}
        </span>
      </Link> */}

    </nav>
    </>
  )
}
