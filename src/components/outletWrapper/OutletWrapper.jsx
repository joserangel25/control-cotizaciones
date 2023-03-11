export default function OutletWrapper({title, children, onClickTitleButton, titleButton = false}) {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className='font-black text-gray-700 text-4xl mb-5'>{title}</h2>
        {
          titleButton && 
          <button onClick={onClickTitleButton} className='hover:text-sky-800'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </button>
        }
      </div>

      {children}
    </div>
  )
}
