const classnames = `h-8
  rounded-sm
  realtive
  block w-full
  px-3 py-2
  border
  border-gray-
  placeholder-gray-500
  text-gray-900
  rounded-b-md
  mb-2
  focus:outline-none
  focus:ring-indigo-500
  focus:z-10 sm:text-sm
  focus:shadow-lg
  transition duration-300
  ease-in-out
  `


export default function Home() {
  return (
    <div className="min-w-full flex min-h-full items-center justify-center p-32 ">
      <div className='w-[90vh] h-[60vh] space-y-8 rounded-lg border bg-white shadow-2xl'>
        <div className="mt-6">
          <h2 className='text-3xl font-extrabold text-center'>Login</h2>
        </div>

        <form className=' space-y-6'>
          <div className='rounded-md  -space-y-px'>
            <div className="grid mt-3 text-center align-middle justify-center">
              <label><span className='text-red-500 mr-2'>*</span>Login:</label>
              <input type='text'
                className={`${classnames} w-96 justify-center`} />
            </div>

            <div className="grid mt-3 text-center align-middle justify-center">
              <label><span className='text-red-500 mr-2'>*</span>Password:</label>
              <input type='password' autoComplete="false" className={`${classnames} w-96 justify-center`} />
            </div>
          </div>
          <div className="flex sm:justify-center justify-center text-center align-middle">
            <button className="bg-blue-500 text-white font-semibold w-48 h-9 rounded-md transition duration-300 ease-in-out hover:bg-blue-600">
              Entrar
            </button>
          </div>
        </form>

      </div>
    </div>

  )
}
