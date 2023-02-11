import { ASEGURADORAS } from "../../constants"
import { useFormulario } from "../../hooks/useFormulario"

export default function FormularioCotizacion() {

  const { datos, changeDatos, handleSubmit } = useFormulario();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-3'>

          <div className=''>
            <label htmlFor='nombre' className='font-bold text-gray-500 mb-2'>Nombre asegurado:</label>
            <input 
              id='nombre'
              name='nombreAsegurado'
              value={datos.nombreAsegurado}
              onChange={changeDatos}
              className='w-full p-2 border-2  mt-1 rounded-md focus:outline-none focus:border-indigo-500 placeholder:text-gray-400 '
              placeholder="Jose Rangel"
            />
          </div>

          <div className=''>
            <label htmlFor='placa' className='font-bold text-gray-500 mb-2'>Placa:</label>
            <input 
              id='placa'
              name='placa'
              value={datos.placa.toUpperCase()}
              onChange={changeDatos}
              placeholder='FLL495'
              className='w-full p-2 border-2 mt-1 focus:border-indigo-500 rounded-md focus:outline-none placeholder:text-gray-400'
            />
          </div>

          <div className=''>
            <label className='font-bold text-gray-500 mb-2' htmlFor='aseguradora'>Mejor aseguradora:</label>
            <select 
              id='aseguradora'
              name='mejorAseguradora' 
              value={datos.mejorAseguradora} 
              onChange={changeDatos} 
              className='w-full p-2 border-2 mt-1 focus:border-indigo-500 rounded-md focus:outline-none '
            >
              <option value='' className='text-gray-400 font-bold'>--Mejor aseguradora</option>
              {
                ASEGURADORAS.map(aseguradora => (
                  <option 
                  key={aseguradora.id} 
                  value={aseguradora.nombre}                  
                  >
                    {aseguradora.nombre}
                  </option>
                ))
              }
            </select>
          </div>

          <div className=''>
            <label htmlFor='prima' className='font-bold text-gray-500 mb-2'>Valor de prima:</label>
            <input 
              type='number'
              id='prima'
              name='prima'
              value={datos.prima}
              onChange={changeDatos}
              placeholder='1.200.000'
              className='w-full p-2 border-2 mt-1 focus:border-indigo-500 rounded-md focus:outline-none placeholder:text-gray-400'
            />
          </div>

          <div className=''>
            <label htmlFor='fecha' className='font-bold text-gray-500 mb-2'>Fecha de cotización:</label>
            <input 
              type='date'
              id='fecha'
              name='fechaCotizacion'
              value={datos.fechaCotizacion}
              onChange={changeDatos}
              placeholder='fecha de cotizacion'
              className='w-full p-2 mt-1 border-2 focus:border-indigo-500 rounded-md focus:outline-none'
            />
          </div>

          <div className=''>
            <label className='font-bold text-gray-500 mb-2'>Estado:</label>
            <select 
              name='estado' 
              value={datos.estado} 
              onChange={changeDatos}
              className='w-full p-2 mt-1 border-2 focus:border-indigo-500 rounded-md focus:outline-none'
            >
              <option value=''>--Seleccionar</option>
              <option value='cotizado'>Cotizado</option>
              <option value='emitido'>Emitido</option>
              <option value='desistido'>Desistido</option>              
            </select>
          </div>

        </div>

        <input 
          type='submit'
          className='w-full p-3 mt-6 bg-sky-800 rounded-md text-white uppercase font-bold mr-1 hover:bg-sky-700 transition-colors cursor-pointer'
          value={datos.id ? 'Editar' : 'Agregar'}
        />
      </form>
    </>
  )
}
