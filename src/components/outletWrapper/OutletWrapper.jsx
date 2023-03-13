export default function OutletWrapper({title, children, onClickTitleButton, titleButton = false}) {
  return (
    <div className="grid  h-full" style={ {gridTemplateRows: 'repeat(11, minmax(0, 1fr))'} }>
      <div className="row-start-1 row-end-2">
        <div className="flex justify-between box-border">
          <h2 className='font-black text-gray-700 text-4xl'>{title}</h2>
          {
            titleButton && 
            <button onClick={onClickTitleButton} className='hover:text-sky-800'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </button>
          }
        </div>
      </div>
      <div className="row-start-2 h-full" style={{gridRowEnd: 12}}>
        {children}

      </div>
    </div>
  )
}
