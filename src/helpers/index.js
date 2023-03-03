export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha  = Date.now().toString(36);
  return random + fecha;
}

//Formateador de fechas
const opciones = {
  year: 'numeric',
  month: 'long',
  day: '2-digit'
}
export const formatearFecha = (fecha, type) => {
  const [y, m, d] = fecha.split('T')[0].split('-')
  const nuevaFecha = new Date(`${y}-${m}-${d}`);

  return `${y}-${m}-${d}`

  if(type === 1){
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
  } else {
    return `${y}-${m}-${Number(d) - 1}`
  }
}


//Formatear valores de prima
export const formatearPrima = (valor) => {
  const changeCurrency = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  return changeCurrency.format(valor)
}

