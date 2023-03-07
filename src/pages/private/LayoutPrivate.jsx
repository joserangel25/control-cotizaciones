import { useRef, useEffect, useState } from 'react'
import { useLocation } from "react-router";
import ButtonAdd from "../../components/ButtonAdd";
import Header from "../../components/Header";
import Modal from "../../components/modal/Modal";
import VerticalMenu from "../../components/verticalMenu/VerticalMenu";
import { Outlet } from 'react-router';

//MUI
import NewAlerta from '../../components/alerta/NewAlerta';
// import { useAlerta } from '../../hooks/useAlerta';


export default function LayoutPrivate({ user }) {
  const menuRef = useRef()
  const outletRef = useRef()
  const { pathname } = useLocation()

  const showOutlet = () => {
    if(!menuRef.current.classList.contains('hidden')){
      outletRef.current.classList.add('hidden')
    } else {
      outletRef.current.classList.remove('hidden')
    }
  }
  //funcion que abre o cierra el menu vertical desde el header
  const showVerticalMenu = () => {
    menuRef.current.classList.toggle('hidden')
    showOutlet()
  }

  const ListenerShowMenu = () => {
    if(!menuRef.current.classList.contains('hidden')){
      menuRef.current.classList.add('hidden')
    }
  } 
  
  //escuchamos los cambios del pathname para ver si hay que ocultar el menu vertical
  // useEffect(() => {
  //   ListenerShowMenu()
  //   showOutlet()
  // }, [pathname])
  
  
  return (
    <>
    {/* <p>Jose</p> */}
    {/* <Outlet /> */}
      <Header showMenu={showVerticalMenu} />

      <main className="flex flex-col md:flex-row">
 
        <div 
          className="hidden md:w-1/4 md:block shadow-lg shadow-stone-200/50 px-5 py-10 md:min-w-[252px] bg-sky-800" 
          style={{height: 'calc(100vh - 87px)'}}
          ref={menuRef}
        >
          <VerticalMenu showMenu={ListenerShowMenu} />
        </div>
        
        <div 
          ref={outletRef}
          className="md:w-3/4 p-5 md:p-10" 
          style={{height: 'calc(100vh - 87px)'}} 
        >
          <Outlet />
          { !pathname.includes('nueva') && <ButtonAdd /> }
        </div>

        <NewAlerta />
        
      </main>
      <Modal />
    </>
  )
}
