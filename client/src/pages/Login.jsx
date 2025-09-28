import {useState} from 'react';
import bg_1 from '../assets/bg_1.avif';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('/api/users/login', {
        email,
        password
      });

      alert('Login successfully');
      console.log(res.data);

      navigate('/');
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
          <h2 className='text-5xl font-semibold text-center mb-12 uppercase'>Login</h2>   

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

          {/* submit button */}
          <button 
            type='submit' 
            className='btn_1'
          >
            Login Now
          </button>

        </form>   

        <p className='mt-5'>
          Don't have an account yet? {' '}
          <Link to='/register'
            className='text-blue-700 hover:text-blue-500 font-semibold'
          >
            Register
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

export default Login