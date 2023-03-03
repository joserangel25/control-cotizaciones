import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
// import { } from '@reduxjs/toolkit/query'
// import { invalidateQueries } from '@reduxjs/toolkit/query';
// import { useNavigate, Link } from "react-router"
import { useOnLoginMutation } from "../../store/api/authApiSlice"
import { login } from "../../store/slices/authSlice"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {

  const [ handleLogin, results ] = useOnLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState({})

  useEffect(() => {
    if(results.status === 'fulfilled'){
      dispatch( login( results.data ))
      navigate('/dashboard/avisos')
      return
    }

    if(results.isError){
      setError({ msg: results.error.data.msg, error: true })

      setTimeout(() => {
        setError({})
      }, 2000);
    }  
  }, [results])
  

  const handleSubmit  = async (e) => {
    e.preventDefault()

    if([email, password].includes('')){
      setError({ msg: 'todos los campos son obligatorios', error: true })
      return
    }
    // invalidateQueries('Cotizaciones')
    await handleLogin({email, password}).unwrap();
    setEmail('')
    setPassword('')
  }

  const { msg } = error

  return (
    <div className='w-full md:w-1/2 max-w-[500px]'>
      
    <form
      onSubmit={handleSubmit} 
      className='p-5 '
    >
      {
        msg && <p className='p-2 uppercase font-bold text-sm bg-red-700 text-white text-center mb-3 rounded-md'>{error.msg}</p>
      }
      <div className='w-full mb-3 flex flex-col'>
        <label 
          htmlFor="email"
          className='text-sm font-bold tex-gray-700 mb-1 text-white'
        >
          Correo
        </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='correo@correo.com'
          className='outline-none rounded-md p-2'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div className='w-full mb-3 flex flex-col'>
        <label 
          htmlFor="password"
          className='text-sm font-bold tex-gray-700 mb-1 text-white'
        >
          Contraseña
        </label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          className='outline-none rounded-md p-2' 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <input 
        type='submit'
        value='Iniciar sesión'
        className='w-full p-2 bg-amber-500 text-gray-700 uppercase font-bold rounded-md shadow-md cursor-pointer'
        
      />

      <div className="mt-5 text-end text-white text-sm">
        <Link to='/'>Recuperar contraseña</Link>
      </div>
    </form>
    </div>

  )
}
