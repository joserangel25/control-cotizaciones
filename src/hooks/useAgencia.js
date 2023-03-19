import { useSelector, useDispatch } from "react-redux";
import { agregarCotizaciones, seleccionarAgencia } from "../store/slices/adminSlice";

export const useAgencia = () => {

  const { cotizacionesAgencia, agencia } = useSelector(state => state.admin);

  const dispatch = useDispatch();

  const agregarCotizacionesAgencia = (cotizaciones) => {
    dispatch( agregarCotizaciones(...cotizaciones)  )
  }
  const escogerAgencia = (agencia) => {
    dispatch ( seleccionarAgencia(agencia) )
  };

  return {
    cotizacionesAgencia,
    agencia,
    agregarCotizacionesAgencia,
    escogerAgencia
  }
}