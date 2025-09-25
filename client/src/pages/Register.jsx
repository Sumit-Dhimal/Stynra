import React from 'react'
import './pages.css';
import bg_1 from '../assets/bg_1.avif';
import {Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className='flex h-screen'>
      <div className='hidden sm:block w-1/2 h-full'>
        <img 
        className='w-full h-full object-cover'
        src={bg_1} alt="background" />
      </div>
      <div className='w-full sm:w-1/2 flex flex-col items-center justify-center'>
        <form className='max-w-[400px] sm:max-w-[500px]'>
          <h2 className='text-4xl font-semibold text-center mb-12'>Create an account</h2>   

          {/* User name */}
          <input 
            type="text"
            name='username'
            value={FormData.username}
            className='form_input'
            required
            placeholder='username'
          />
          {/* email */}
          <input 
            type="email" 
            name='email'
            value={FormData.email}
            className='form_input'
            required
            placeholder='email address'
          />
          {/* password */}
          <input 
            type="password" 
            name='password'
            value={FormData.password}
            className='form_input'
            required
            placeholder='password'
          />
          {/* confirm password */}
          <input 
            type="password"
            name='confirmPassword'
            value={FormData.confirmPassword}
            className='form_input'
            required
            placeholder='confirm password' 
          />

          {/* privacy and policy */}
          <div className='flex items-center my-4'>
            <label className='text-justify text-xs'>
              By clicking in register you have agreed with our {' '}
              <Link to='/policy' className='hover:underline text-blue-400'>
               privacy & policy
              </Link>
            </label>
          </div>
          {/* submit button */}
          <button type='submit' className='btn_1'>Register</button>

        </form>   

        {/* Divider */}
        <div className="flex items-center my-4 w-full max-w-[500px]">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Continue with google */}
        <button className='google'>
          <FcGoogle />
          Continue with google
        </button>
      </div>
    </div>
  )
}

export default Register