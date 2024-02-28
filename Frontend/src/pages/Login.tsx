import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <main className="w-full h-svh flex flex-col">
      <Navbar/>
      <article className="flex-1 bg-white p-8 rounded-lg flex flex-col justify-center">
        <h2 className="text-3xl text-center font-bold mb-8">Ingresa tu información</h2>
        <form className='mx-auto max-w-96 w-full'>
          <div className="mb-4">
            <label htmlFor="email" className="block text-textColor mb-1">Correo electronico</label>
            <input 
              type="email" 
              id="email" 
              className="px-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:border-green" 
              placeholder="usuario@example.com" 
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-textColor mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              className="px-3 py-2 w-full rounded border border-gray-300 focus:outline-none focus:border-green" 
              placeholder="Enter your password" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-primary rounded-md py-2 px-4 hover:brightness-90 w-full"
          >
            Acceder
          </button>
        </form>
      </article>
      <Footer/>
    </main>
  )
}

export default Login