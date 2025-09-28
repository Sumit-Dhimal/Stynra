import { useState } from 'react'
import './pages.css';
import bg_1 from '../assets/bg_1.avif';
import {Link, useNavigate} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';


const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();
    
    if(password !== confirmPassword) {
      alert("Confirm same password");
      return;
    }

    try {
      const res = await axios.post('/api/users/register', {
        username,
        email,
        password,
      });

      alert("Registration successfull");
      console.log(res.data);

      // Optionally, save user/token in localStorage if API sends it
      // localStorage.setItem("token", res.data.token);

      navigate('/login');
    } catch (err) {
      console.error(err.response);
      alert(err.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className='flex h-screen'>
      <div className='hidden sm:block w-1/2 h-full'>
        <img 
        className='w-full h-full object-cover'
        src={bg_1} alt="background" />
      </div>
      <div className='w-full sm:w-1/2 flex flex-col items-center justify-center'>
        <form className='max-w-[400px] sm:max-w-[500px]' onSubmit={handleSubmit}>
          <h2 className='text-5xl font-semibold text-center mb-12 uppercase'>Register</h2>   

          {/* User name */}
          <input 
            type="text"
            name='username'
            value={username}
            className='form_input'
            required
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* email */}
          <input 
            type="email" 
            name='email'
            value={email}
            className='form_input'
            required
            placeholder='email address'
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* password */}
          <input 
            type="password" 
            name='password'
            value={password}
            className='form_input'
            required
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* confirm password */}
          <input 
            type="password"
            name='confirmPassword'
            value={confirmPassword}
            className='form_input'
            required
            placeholder='confirm password' 
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <button 
            type='submit' 
            className='btn_1'
          >
            Register
          </button>

        </form>   

        {/*  */}
        <p className='mt-5'>
          Already have an account? {' '}
          <Link to='/login'
            className='text-blue-700 hover:text-blue-500 font-semibold'
          >
            Login
          </Link>
        </p>

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