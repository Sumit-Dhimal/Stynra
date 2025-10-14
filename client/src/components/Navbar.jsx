import { Link } from "react-router-dom"
import logo from '../assets/logo.png';
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";


const Navbar = () => {
  const {user, logout}  = useContext(AuthContext);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="mx-auto px-4 py-2 sm:px-8 shadow-xs">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to='/'>
            <img 
            className="h-8 sm:h-12"
            src={logo} alt="logo" />
          </Link>
        </div>

        <div className="space-x-8 hidden sm:flex">
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/story'>Story</Link>
          <Link to='/contact'>Contact</Link>
        </div>

         
        <div className="flex items-center space-x-6">
          <Link className="text-xl sm:text-2xl"
          to='/cart'><FaCartShopping /></Link>

          {
            user ?
            (<MdOutlineAccountCircle className="text-2xl" onClick={() => setProfileOpen(!profileOpen)} />)
            :
            (<Link className="text-2xl" to={'/login'}>Login</Link>)
          }
        </div>

        {
          profileOpen && (
            <div className="absolute right-4 top-16 bg-white shadow-md rounded-lg py-2 w-40">
              <Link 
                to="/profile" 
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setProfileOpen(false)}
              >
                Profile
              </Link>
              <button 
                onClick={() => {
                  logout();
                  setProfileOpen(false);
                }}
                className="block w-full text-red-500 px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )
        }

      </div>
    </nav>
  )
}

export default Navbar