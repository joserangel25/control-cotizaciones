import AcountMenu from './acountMenu/AcountMenu';

export default function Header({setBusqueda, showByState, showMenu, filtrado: filtradoState}) {

  const filtrarPlaca = (e) => {
    // console.log(e.target.value)
    const filtrado = filtradoState.find(cotizacion => cotizacion.placa.toLowerCase() == e.target.value.toLowerCase())
    if(filtrado){
      setBusqueda([filtrado])
    } else {
      setBusqueda([])
    }
  }

  return (
    <header className='bg-gray-50 px-5 md:px-10 py-5 flex justify-between shadow-lg shadow-stone-200/50'>
        <button
          onClick={showMenu} 
          className='md:hidden'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
        <figure className='w-40'>
          <img src="https://i0.wp.com/segurosjd.com/wp-content/uploads/2020/07/LogoJD2.fw_.png?w=305&ssl=1" alt="logo de JD empresa" />
        </figure>
      <AcountMenu />
    </header>
  )
}