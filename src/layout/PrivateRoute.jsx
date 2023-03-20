import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router"


//redux
import { useAutenticacionByTokenQuery } from "../store/api/authApiSlice"
import { login } from "../store/slices/authSlice"

export default function PrivateRoute() {

  const dispatch = useDispatch()
  const autenticarByToken = useAutenticacionByTokenQuery()

  const navigate = useNavigate()
  const { auth } = useSelector(state => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!auth._id && !token){
      navigate('/')
    } 

    if(auth?.rol === 'admin'){
      navigate('admin')
    } else if(auth?.rol === 'colaborador'){
      navigate('cliente')
    }

    if(!auth._id && token){
      if(autenticarByToken.data?._id){
        dispatch( login({...autenticarByToken.data, token}) )
        if(autenticarByToken.data?.rol === 'admin'){
          navigate('admin')
        } else if(autenticarByToken.data?.rol === 'colaborador'){
          navigate('cliente')
        }
      }
    }
  }, [autenticarByToken])  

  return (
    <>
      {
        auth._id && <Outlet />
      }
    </>
  )
}
