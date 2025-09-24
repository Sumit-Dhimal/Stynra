import { Link } from "react-router-dom"
import logo from '../assets/logo.png';
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
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
          <Link className="text-2xl"
          to='/register'><MdOutlineAccountCircle /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar