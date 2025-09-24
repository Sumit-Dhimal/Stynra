import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();

  // paths where navbar should be hidden
  const hideNavbarPaths = ['/login', '/register'];

  return (
    <div>

      {/* navbar is hidden in the routes mentioned in hideNavbarPaths */}
      {
        !hideNavbarPaths.includes(location.pathname) && <Navbar />
      }

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App