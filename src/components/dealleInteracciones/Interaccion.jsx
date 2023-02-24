
export default function Interaccion({interaccion}) {
  const { fecha, descripcion } = interaccion
  return (
    <div className="p-4 border-b my-2 bg-white">
      <p className="font-bold">{fecha}</p>
      <p>{descripcion}</p>
    </div>
  )
}
