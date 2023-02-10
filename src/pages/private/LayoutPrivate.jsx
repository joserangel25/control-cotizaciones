import Header from "../../components/Header";
import VerticalMenu from "../../components/verticalMenu/VerticalMenu";


export default function LayoutPrivate({ Outlet }) {
  return (
    <>
      <Header />

      <main className="flex gap-4 ">
 
        <div className="w-1/4 shadow-lg shadow-stone-200/50 h-full px-5 py-10 md:min-w-[252px]" style={{height: 'calc(100vh - 87px)'}}>
          <VerticalMenu />
        </div>
        
        <div className="w-3/4 px-5 py-10">
          <Outlet />
        </div>

      </main>
    </>
  )
}
