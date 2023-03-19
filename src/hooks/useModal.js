import { useDispatch } from "react-redux";
import { setModal } from '../store/slices/modalSlice'

export const useModal = () => {
  
  const dispatch = useDispatch();

  const abrirModal = (content, message = '') => {
    dispatch( setModal({ isOpen: true, content, message }) )
  }

  const cerrarModal = () => {
    dispatch( setModal({ isOpen: false, content: '', message: '' }) )
  }
  
  return {
    abrirModal,
    cerrarModal
  }
}