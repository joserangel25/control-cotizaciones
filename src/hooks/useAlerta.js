import { useDispatch } from "react-redux";
import { setAlerta } from "../store/slices/cotizacionesSlice";


export const useAlerta = () => {
  const dispatch = useDispatch();

  const restablecerAlerta = () => {
    dispatch( setAlerta({
      isOpen: false,
      message: '',
      type: 'info'
    }) )
  }

  const alertaExito = (msg) => {
    dispatch( setAlerta({
      isOpen: true,
      message: msg,
      type: 'success'
    }) )

    setTimeout(() => {
      restablecerAlerta()
    }, 2000)
  }

  const alertaError = (msg) => {
    dispatch( setAlerta({
      isOpen: true,
      message: msg,
      type: 'error'
    }) )

    setTimeout(() => {
      restablecerAlerta()
    }, 2000)
  }

  return {
    restablecerAlerta,
    alertaExito,
    alertaError
  }
}