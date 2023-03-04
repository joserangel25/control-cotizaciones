import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingModal({message}) {

  return (
    <>
      <div className='text-center p-10'>
          <p className='text-lg uppercase font-bold text-gray-600'>{message}</p>
          <CircularProgress size={30} />
      </div>
    </>
    

  )
}
