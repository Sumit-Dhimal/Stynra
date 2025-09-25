import {Routes, Route, useLocation, Outlet} from 'react-router-dom';
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

      <div>
        {/* renders child element */}
        <Outlet /> 
      </div>
    </div>
  )
}

export default App