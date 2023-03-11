//Redux
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/slices/modalSlice';

//API RTK Query
import { useGetAgenciasApiQuery } from '../../store/api/adminApi'

//Componentes
import OutletWrapper from '../../components/outletWrapper/OutletWrapper'

//MUI
import CircularProgress from '@mui/material/CircularProgress';
import Agencia from '../../components/agencias/Agencia';


export default function Agencias() {
  const { data: agencias, isError, isLoading, isSuccess, status } = useGetAgenciasApiQuery();
  const dispatch = useDispatch()


  const handleTitleButton = () => {
    dispatch( setModal({ isOpen: true, message: '', content: 'ADD-AGENCY' }) )
  }
  
  return (
    <OutletWrapper title='Agencias' titleButton={true} onClickTitleButton={handleTitleButton}>
      {
        isLoading && (<div className='w-full flex justify-center'><CircularProgress size={30} /></div>)
      }
      {
        (!isLoading && !isError) &&
          <ul className='flex flex-col h-5/6 overflow-x-hidden scrollbar'>
            <li className='flex justify-between font-bold uppercase p-2 bg-sky-700 text-white'>
              <p>Nombre</p>
              <p>Identificacion</p>
              <p>Acciones</p>
            </li>
          {
            agencias.map(agencia => (
              <Agencia key={agencia._id} agencia={agencia} />   
            ))
          }
          </ul>      
      }
    </OutletWrapper>
  )
}
