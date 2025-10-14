import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx';

import App from './App.jsx';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Profile from './pages/Profile.jsx';
import Payment from './pages/Payment.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route index element={<Home/>} /> {/* Default route */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> 

        {/* Protected Routes */}
        <Route path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path='/payment'
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
