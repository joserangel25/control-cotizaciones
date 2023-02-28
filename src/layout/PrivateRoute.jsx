import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import LayoutPrivate from "../pages/private/LayoutPrivate"


//redux
import { useGetCotizacionesQuery } from "../store/api/cotizacionesApi"
import { setCotizacionesStore } from "../store/slices/cotizacionesSlice"
import { useAutenticacionByTokenQuery } from "../store/api/authApiSlice"
import { login } from "../store/slices/authSlice"

export default function PrivateRoute() {

  const dispatch = useDispatch()
  const cotizaciones = useGetCotizacionesQuery()
  const autenticarByToken = useAutenticacionByTokenQuery()

  const navigate = useNavigate()
  const { auth } = useSelector(state => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!auth._id && !token){
      navigate('/')
    } 

    if(!auth._id && token){
      if(autenticarByToken.data?._id){
        dispatch( login({...autenticarByToken.data, token}) )
      }
    }
  }, [autenticarByToken])

  useEffect(() => {

    if(cotizaciones.data){
      dispatch( setCotizacionesStore(cotizaciones.data) )
    }


    if(!cotizaciones.data && autenticarByToken?.data?._id){
      cotizaciones.refetch()
    }

  }, [cotizaciones, autenticarByToken])
  

  return (
    <>
      {
        auth._id && <LayoutPrivate Outlet={Outlet} />
      }
    </>
  )
}
