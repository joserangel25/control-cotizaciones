import { ASEGURADORAS } from "../../constants"
import { formatearFecha } from "../../helpers";
import { useFormulario } from "../../hooks/useFormulario"

//MUI
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function FormularioCotizacion() {

  const { datos, changeDatos, handleSubmit, results, resultsEditar } = useFormulario();


  return (
      <form 
        onSubmit={handleSubmit}
        className='h-5/6 overflow-x-hidden scrollbar'>
        <div className='grid md:grid-cols-2 gap-3'>

          <div className=''>
            <label htmlFor='nombre' className='font-bold text-gray-500 mb-2'>Cliente:</label>
            <input 
              id='nombre'
              name='cliente'
              value={datos.cliente}
              onChange={changeDatos}
              className='w-full p-2 border-2  mt-1 rounded-md focus:outline-none focus:border-indigo-500 placeholder:text-gray-400 uppercase'
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
            <label htmlFor='prima' className='font-bold text-gray-500 mb-2'>Prima:</label>
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

          {
            datos?._id && 
            (
              <>
                <div className=''>
                  <label htmlFor='fecha' className='font-bold text-gray-500 mb-2'>Fecha de cotización:</label>
                  <input 
                    type='date'
                    id='fecha'
                    name='fecha'
                    value={formatearFecha(datos.fecha)}
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
                    <option value='Cotizado'>Cotizado</option>
                    <option value='Emitido'>Emitido</option>
                    <option value='Desistido'>Desistido</option>              
                  </select>
                </div>
              </>
            )
          }

          <div className=''>
            <label htmlFor='referido' className='font-bold text-gray-500 mb-2 '>Referido:</label>
            <input 
              id='referido'
              name='referido'
              value={datos.referido}
              onChange={changeDatos}
              className='w-full p-2 border-2  mt-1 rounded-md focus:outline-none focus:border-indigo-500 placeholder:text-gray-400 uppercase'
              placeholder="Ej. Jose Rangel"
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='observaciones' className='font-bold text-gray-500 mb-2'>Observaciones</label>
            <input 
              id='observaciones'
              name='observaciones'
              value={datos.observaciones}
              onChange={changeDatos}
              className='w-full p-2 border-2  mt-1 rounded-md focus:outline-none focus:border-indigo-500 placeholder:text-gray-400 uppercase'
              placeholder="Ej. Hijo del sr. Armando Del vecchio"
            />
          </div>
        </div>

        <Button 
          type='submit'
          sx={{padding: '12px', marginTop: 1, backgroundColor: '#075985'}}
          variant="contained"
          size="large"
          fullWidth
          disabled={results.isLoading || resultsEditar.isLoading}
          endIcon={(results.isLoading || resultsEditar.isLoading ) && <CircularProgress size={24} />}
        >
          {datos._id ? 'Guardar cambios' : 'Agregar cotizacion'}
        </Button>
      </form>
  )
}
