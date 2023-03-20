import { Link } from "react-router-dom";


export default function ButtonAdd() {
  return (
    <Link
      className='fixed bottom-5 right-5 w-14 h-14 bg-sky-800 shadow-md rounded-full grid place-content-center cursor-pointer'
      to={'nueva-cotizacion'}
    >
      <span className='text-2xl text-white'>+</span>
    </Link>
  )
}
