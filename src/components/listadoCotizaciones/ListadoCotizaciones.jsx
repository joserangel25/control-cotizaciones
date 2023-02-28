
export default function ListadoCotizaciones({ children }) {
  return (
    <ul className='flex flex-col gap-2 h-5/6 overflow-x-hidden scrollbar'>
      { children }
    </ul>
  )
}
