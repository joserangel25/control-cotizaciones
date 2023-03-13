import { useState, useEffect } from 'react'
import { useParams }  from 'react-router-dom' 
import { useAlerta } from '../../hooks/useAlerta'
import { useModal } from '../../hooks/useModal'

//MUI
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

//RTK Query
import { useBuscarUsuarioApiMutation, useAñadirUsuarioAAgenciaApiMutation } from '../../store/api/adminApi'


export default function UsuarioAgenciaModal({message}) {

  const [ buscarUsuario, { data, isLoading, isError } ] = useBuscarUsuarioApiMutation()
  const [ añadirUsuario, { isLoading: isLoadingAñadir } ] = useAñadirUsuarioAAgenciaApiMutation()
  const { alertaError, alertaExito } = useAlerta()
  const { cerrarModal } = useModal()
  const { id: idAgencia } = useParams()


  const [ email, setEmail ] = useState('')
  const [ usuarioEncontrado, setUsuarioEncontrado ] = useState({})

  const handleClickBuscarUsuario = async (e) => {
    e.preventDefault();
    if(!email){
      alertaError('Debes buscar por un coreo')
    }

    try {
      const user = await buscarUsuario({email}).unwrap()
      setUsuarioEncontrado(user)
    } catch (error) {
      alertaError(error.data?.msg)
    }
  }
  
  const handleClickAgregarUsuarioAAgencia = async () => {
    try {
      const res = await añadirUsuario({ idAgencia, id: usuarioEncontrado._id }).unwrap();
      cerrarModal()
      alertaExito(res.msg)
    } catch (error) {
      console.log(error);
      alertaError(error.data.msg)
    }
  }

  return (
    <div className='p-5'>
      <h3 className="font-bold text-xl mb-5">{message}</h3>

      <form
        onSubmit={handleClickBuscarUsuario}
      >
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
            type='submit'
            autoFocus 
            sx={{padding: '12px', marginTop: 1}}
            variant="contained"
            margin='normal'
            size="large"
            fullWidth
            disabled={isLoading}
            endIcon={isLoading && <CircularProgress size={24} />}
          >
            Buscar Usuario
          </Button>
      </form>

      {
        Boolean(Object.keys(usuarioEncontrado).length) && (
          <div className='bg-gray-100 p-3 mt-5 rounded-lg'>
            <p className='font-bold text-lg text-center mb-2'>Usuario encontrado</p>
            <div className=' flex justify-between items-center'>
              <p className='uppercase font-bold'>{usuarioEncontrado.nombre}</p>

              <Button 
                type='button'
                  onClick={handleClickAgregarUsuarioAAgencia}
                  // variant="contained"
                // margin='normal'
                size="small"
                disabled={isLoadingAñadir}
                endIcon={isLoadingAñadir && <CircularProgress size={24} />}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </Button>
            </div>

          </div>
        )
      }
    </div>
  )
}
