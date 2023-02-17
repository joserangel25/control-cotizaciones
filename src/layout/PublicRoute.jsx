import { Outlet } from "react-router"

export default function PublicRoute() {
  return (
    <div className="h-screen bg-sky-700 flex justify-center items-center">
      
      <Outlet />
    </div>
  )
}
