import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import LayoutPrivate from "../pages/private/LayoutPrivate"

export default function PrivateRoute() {
  
  const navigate = useNavigate()
  const auth = true

  useEffect(() => {
    if(!auth){
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
