

export default function Agencia({nombre, identificacion}) {
  return (
    <li className="grid grid-cols-11 p-2 border font-bold text-gray-600 uppercase ">
      <p className="col-start-1 col-end-5">{nombre}</p>
      <p className="col-start-6 col-end-10">{identificacion}</p>
      <div className="flex">
        <button>Editar</button>
        <button>Detalles</button>
        <button>Eliminar</button>
      </div>
    </li>
  )
}
