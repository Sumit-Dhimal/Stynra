import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
