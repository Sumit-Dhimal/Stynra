import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route index element={<Home/>} /> {/* Default route */}
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} /> 

        {/* Protected Routes */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
