
export default function Alerta({alerta}) {
  const { msg, error = null } = alerta
  return (
    <div 
      className={`${error ? 'bg-red-800' : 'bg-sky-800'} p-3 text-center text-white uppercase font-bold  mb-5 rounded-md`}
    >
      {msg}
    </div>
  )
}
