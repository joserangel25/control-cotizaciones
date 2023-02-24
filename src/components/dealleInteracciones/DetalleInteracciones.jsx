import Interaccion from './Interaccion'
import { useDispatch } from 'react-redux'
import { setModal } from '../../store/slices/modalSlice';

export default function DetalleInteracciones({interacciones}) {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch( setModal('INTERACCION') )
  }
  return (
    <div className='h-full'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-bold text-gray-600 mb-3'>Últimas interacciones</h3>
        <button 
          onClick={handleOpenModal}
          title='Agregar'
          className='text-sky-700 hover:text-sky-800 hover:scale-110 transition-colors p-2 uppercase font-bold  rounded-lg'
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
          </svg>

        </button>

      </div>

      <div className='h-[80%] overflow-x-hidden mt-2 scrollbar'>
      {
        interacciones.length ? interacciones.map(interaccion => (
          <Interaccion key={interaccion._id} interaccion={interaccion}/>
        )) : 'No se ha tenido contacto con el cliente aún'
      }

      </div>
    </div>
  )
}
