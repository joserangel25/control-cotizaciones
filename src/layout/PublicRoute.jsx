import { Outlet } from "react-router"
import Modal from "../components/modal/Modal"

export default function PublicRoute() {
  return (
    <div className="h-screen bg-sky-700 flex justify-center items-center">
      
      <Outlet />
      <Modal />
    </div>
  )
}
