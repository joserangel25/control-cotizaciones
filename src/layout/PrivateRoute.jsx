import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import LayoutPrivate from "../pages/private/LayoutPrivate"

export default function PrivateRoute() {
  
  const navigate = useNavigate()
  const { auth } = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth._id){
      navigate('/')
    } 
  }, [])

  return (
    <>
      {
        auth && <LayoutPrivate Outlet={Outlet} />
      }
    </>
  )
}
