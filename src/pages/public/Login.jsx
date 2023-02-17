

export default function Login() {

  const handleSubmit  = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value

    if([email, password].includes('')){
      alert('todos los campos son obligatorios')
      return
    }


  }
  return (
    <div className='w-full md:w-1/2 max-w-[500px]'>
    <form
      onSubmit={handleSubmit} 
      className='p-5 '
    >
      <div className='w-full mb-3 flex flex-col'>
        <label 
          htmlFor="email"
          className='text-sm font-bold tex-gray-700 mb-1 text-white'
        >
          Correo
        </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='correo@correo.com'
          className='outline-none rounded-md p-2' 
        />
      </div>

      <div className='w-full mb-3 flex flex-col'>
        <label 
          htmlFor="password"
          className='text-sm font-bold tex-gray-700 mb-1 text-white'
        >
          Contraseña
        </label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder='correo@correo.com'
          className='outline-none rounded-md p-2' 
        />
      </div>

      <input 
        type='submit'
        value='Iniciar sesión'
        className='w-full p-2 bg-amber-500 text-gray-700 uppercase font-bold rounded-md shadow-md'
      />
    </form>
    </div>

  )
}
