import React from 'react'
import { useSelector } from 'react-redux';
import { IconButton, Avatar } from '@mui/material'
import MenuOptions from './Menu';

export default function AcountMenu() {

  const { auth } = useSelector(state => state.auth)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const initialNameLetter = auth?.nombre && auth?.nombre[0]?.toUpperCase() || '' 
  return (
    <>
      <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
        <Avatar sx={{ width: 32, height: 32 }}>{initialNameLetter}</Avatar>
      </IconButton>

      <MenuOptions open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </>
  )
}
