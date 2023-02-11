import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { formatearFecha, formatearPrima } from "../../helpers";
import { obtenerCotizacion } from "../../store/slices/cotizacionesSlice"

export default function Cotizacion({ cotizacion }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { nombreAsegurado, placa, prima, mejorAseguradora, fechaCotizacion, estado, id } = cotizacion
  const handleClickEditar = () => {
    dispatch( obtenerCotizacion(cotizacion) )
    navigate(`/dashboard/editar-cotizacion/${id}`)
  }
  return (
    <li className='py-2 flex items-center border-b-2 justify-between'>
      <div className='w-2/6 lg:w-4/12 flex flex-col lg:flex-row lg:gap-2'>
        <p className='font-bold text-gray-700 uppercase'>{nombreAsegurado}</p>
        <p>{placa}</p>
      </div>

      <div className='w-2/6 lg:w-2/12 flex items-center flex-col lg:flex-row lg:gap-2'>
        <p className='font-bold text-gray-700'>{mejorAseguradora}</p>
        <p className='text-sm '>{ formatearPrima(prima)}</p>
      </div>

      <div className='w-1/6 lg:w-3/12 flex items-center flex-col lg:flex-row lg:gap-2'>
        <p className='font-bold text-gray-700'>{estado}</p>
        <p className='text-sm text-gray-700'>{formatearFecha(fechaCotizacion)}</p>
      </div>

      {/* Botones para accion */}
      <div className='w-1/6 flex lg:w-1/12 items-center gap-2'>
        <button title='Editar' onClick={handleClickEditar} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-sky-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        </button>
        <button title="ver detalles">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-sky-800">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
        </svg>

        </button>
      </div>
    </li>
  )
}
