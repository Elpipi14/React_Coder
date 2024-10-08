const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-center font-courier-prime m-6 text-3xl font-bold text-gray-800 dark:text-white">
        Registro Cliente
      </h1>
      <h2 className="text-center mb-6 text-lg text-gray-600 dark:text-gray-400">
        Completa los datos para crear una cuenta, ¡Gracias!
      </h2>
      <form className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        {/* Nombre */}
        <label className='mb-2 text-base font-medium text-gray-700 dark:text-gray-300'>
          Nombre
        </label>
        <input
          type='text'
          placeholder='Nombre'
          className='w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition'
        />

        {/* Apellido */}
        <label className='mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300'>
          Apellido
        </label>
        <input
          type='text'
          placeholder='Apellido'
          className='w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition'
        />

        {/* Email */}
        <label className='mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300'>
          Email
        </label>
        <input
          type='email'
          placeholder='Email'
          className='w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition'
        />

        {/* Contraseña */}
        <label className='mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300'>
          Contraseña
        </label>
        <input
          type='password'
          placeholder='Contraseña'
          className='w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition'
        />

        <label className='mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300'>
          Repita Contraseña
        </label>
        <input
          type='password'
          placeholder='Contraseña'
          className='w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition'
        />

        {/* Botón de registro */}
        <button
          type='submit'
          className='border rounded-full  items-center justify-center py-3 px-7 text-center text-base font-medium text-black hover:bg-[#0BB489] hover:border-[#0BB489] mt-4'
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
