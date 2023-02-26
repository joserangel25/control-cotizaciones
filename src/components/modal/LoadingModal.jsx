import CircularProgress from '@mui/material/CircularProgress';
import DialogContent from '@mui/material/DialogContent'

export default function LoadingModal() {
  return (
    <>
      <DialogContent>
      <div className='w-full h-62 grid place-content-center grid-rows-2'>
      

          <p className='text-lg uppercase font-bold text-gray-600'>Cerrando sesión...</p>

          <CircularProgress size={30} />

      </div>
      </DialogContent>
    </>
    

  )
}
