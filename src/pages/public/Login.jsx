import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useOnLoginMutation } from "../../store/api/authApiSlice"
import { login } from "../../store/slices/authSlice"
import { setModal } from "../../store/slices/modalSlice"
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Login() {

  const [ handleLogin, results ] = useOnLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ showPassword, setShowPassword ] = useState(false)
  const [ error, setError ] = useState({})

  useEffect(() => {
    if(results.status === 'fulfilled'){
      dispatch( login( results.data ))
      navigate('/dashboard/avisos')
      dispatch( setModal({isOpen: false, content: '', message: ''}) )

      return
    }

    if(results.isError){
      setError({ msg: results.error.data.msg, error: true })
      dispatch( setModal({isOpen: false, content: '', message: ''}) )

      setTimeout(() => {
        setError({})
      }, 2000);
    }  

  }, [results])
  
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit  = async (e) => {
    e.preventDefault()

    if([email, password].includes('')){
      setError({ msg: 'todos los campos son obligatorios', error: true })
      return
    }
    dispatch( setModal({
      isOpen: true,
      content: 'LOADING',
      message:  'Iniciando sesión. Un momento por favor...'
     }) )
    await handleLogin({email, password}).unwrap();
    setEmail('')
    setPassword('')
  }

  const { msg } = error

  return (
    <div className='mx-auto max-w-[500px]'>
      
    <form
      onSubmit={handleSubmit} 
      className='p-5 '
    >
      <h3 className='text-4xl font-black text-sky-800 text-center'>Inicia Sesión</h3>
      <h2 className='text-3xl font-black text-sky-600 text-center mb-5'>y controla tu negocio!</h2>
      {
        msg && <p className='p-2 uppercase font-bold text-sm bg-red-700 text-white text-center mb-3 rounded-md'>{error.msg}</p>
      }

      {/* Email password */}
      <TextField
        id="outlined-password-input"
        label="Email"
        type="email"
        fullWidth
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> 
      
      {/* /Password Input */}
      <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button 
          type='submit'
          autoFocus 
          sx={{padding: '12px', marginTop: 1}}
          variant="contained"
          margin='normal'
          size="large"
          fullWidth
        >
          Iniciar sesión
        </Button>

        <Link 
          to='/'
          className="mt-5 block text-center md:text-end text-sm hover:text-sky-700 transition-colors"
        >
          Recuperar contraseña
        </Link>

    </form>
    </div>

  )
}
