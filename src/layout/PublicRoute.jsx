import { Outlet } from "react-router"
import Modal from "../components/modal/Modal"

export default function PublicRoute() {
  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="hidden md:block w-2/6 bg-stone-400 h-full ">
        <img 
          src='https://images.pexels.com/photos/8867272/pexels-photo-8867272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          alt='imagen-fondo-longin'
          className='w-full h-full object-cover drop-shadow-xl'  
        />
      </div>
      <div className="w-full md:w-4/6">
        <Outlet />
      </div>
      <Modal />
    </div>
  )
}
