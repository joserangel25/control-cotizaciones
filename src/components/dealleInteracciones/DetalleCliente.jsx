
export default function DetalleCliente({observaciones, referido}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-600 mb-3">Datos relevantes</h3>
        <p className="font-bold text-gray-600">Referido por: <span className="font-normal">{referido}</span></p>
        <p className="font-bold text-gray-600 mt-1">Observaciones</p>
        <textarea
          className="w-full p-2 outline-none my-1 shadow-md" 
          value={observaciones || 'No tiene'}
          readOnly
        />
    </div>
  )
}
