import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import LayoutPrivate from "../pages/private/LayoutPrivate"


//redux
import { useGetCotizacionesQuery } from "../store/api/cotizacionesApi"
import { setCotizacionesStore } from "../store/slices/cotizacionesSlice"

export default function PrivateRoute() {

  const dispatch = useDispatch()
  const cotizaciones = useGetCotizacionesQuery()

  const navigate = useNavigate()
  const { auth } = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth._id){
      navigate('/')
    } 
  }, [])

  useEffect(() => {
    if(cotizaciones.data){
      dispatch( setCotizacionesStore(cotizaciones.data) )
    }
  }, [cotizaciones])
  

  return (
    <>
      {
        auth && <LayoutPrivate Outlet={Outlet} />
      }
    </>
  )
}
