import React from 'react'

export default function ButtonAdd({setModal}) {
  return (
    <div 
      className='fixed bottom-5 right-5 w-14 h-14 bg-white rounded-full grid place-content-center cursor-pointer'
      onClick={() => setModal(true)}
    >
      <p className='text-2xl'>+</p>
    </div>
  )
}
