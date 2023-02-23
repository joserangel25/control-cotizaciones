
export default function Alerta({alerta}) {
  const { msg, error = null } = alerta
  return (
    <p className={`${error ? 'bg-red-800' : 'bg-sky-800'} p-3 text-center text-white uppercase font-bold  mb-2 rounded-md`}>
      {msg}
    </p>
  )
}
