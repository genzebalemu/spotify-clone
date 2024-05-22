import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className=' flex flex-col items-center space-y-4 bg-slate-50 p-8 '>
        <p className='text-xl  font-bold'>Signin</p>
        <form className='flex flex-col space-y-8 '>
        <input 
          placeholder='user name' 
          className='border p-3'
        />

        <input type='password '
          placeholder='password' 
          className='border p-3'
        />

        <button className='p-3 bg-slate-400' type='button'>Signin</button>
        <button className='p-3 bg-slate-400' type='button'>Signin with Google</button>
        </form>

        <Link to="/signup" className='text-blue-700 underline'>
        <p>Don't have an account? signUp</p>
        </Link>
        
      
    </div>
  )
}

export default Signin;
