import { useLocation } from "react-router";
import ButtonAdd from "../../components/ButtonAdd";
import Header from "../../components/Header";
import Modal from "../../components/modal/Modal";
import VerticalMenu from "../../components/verticalMenu/VerticalMenu";


export default function LayoutPrivate({ Outlet }) {
  const { pathname } = useLocation()
  return (
    <>
      <Header />

      <main className="flex">
 
        <div className="w-1/4 shadow-lg shadow-stone-200/50 h-full px-5 py-10 md:min-w-[252px] bg-sky-800" style={{height: 'calc(100vh - 87px)'}}>
          <VerticalMenu />
        </div>
        
        <div className="w-3/4 p-10 ">
          <Outlet />
        { !pathname.includes('nueva') && <ButtonAdd /> }
        </div>

      </main>
      <Modal />
    </>
  )
}
