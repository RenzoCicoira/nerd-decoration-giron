import React from 'react'

const MobCheckoutForm = ({handleSubmit, handleNavigate, handleInputChange, values}) => {
  return (
    <div className='flex flex-col items-center h-screen'>
      <div className='mt-24 p-4 bg-components rounded-xl'>
        <div>
          <button className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded" onClick={handleNavigate}>Volver</button>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className=''>Checkout</h2>
          <p className='text-2xl m-2'>Formulario de confirmación de compra</p>
        </div>
        <div className='mt-4'>
          <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <input 
              required
              className=' m-2 text-xl text-black w-5/6' 
              placeholder='Nombre' 
              type={"text"} 
              value={values.name}
              id='name'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-5/6' 
              placeholder='Apellido' 
              type={"text"} 
              value={values.lastname}
              id='lastname'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-5/6' 
              placeholder='Email' 
              type={"email"} 
              value={values.email}
              id='email'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-5/6' 
              placeholder='Ingresa mail nuevamente' 
              type={"email"} 
              value={values.emailComp}
              id='emailComp'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-5/6' 
              placeholder='Teléfono' 
              type={"tel"} 
              value={values.tel}
              id='tel'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-5/6' 
              placeholder='Dirección' 
              type={"dir"} 
              value={values.dir}
              id='dir'
              onChange={handleInputChange}
            />
            {
              (values.email === values.emailComp)
              ? <button  
                  className='bg-green-500 hover:bg-green-600 rounded w-2/3 py-1 my-4 text-2xl' 
                  type='submit'
                  >Realizar Compra
                </button>
              : <div className='flex flex-col items-center justify-center w-2/3'>
                  <p>Los input de email deben coincidir</p>
                  <button  
                    className='bg-green-500 rounded py-1 my-3 text-2xl w-full' 
                    type='submit'
                    disabled
                    >Realizar Compra
                  </button>
              </div> 
                
            }
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default MobCheckoutForm