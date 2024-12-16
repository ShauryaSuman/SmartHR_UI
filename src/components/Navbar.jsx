import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/bytical_full_black.svg'
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeFxn = ({ isActive }) => isActive ? "brand_color_text" : "text-gray-700 hover:text-orange-600";
  const userInfo = useSelector(state => state.login.userInfo);
  const { emailVerified, name, photoURL } = userInfo;
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-blue-600">
              <div className='max-w-36'>
                <img src={logo} alt='bytical logo' />
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/products" className={activeFxn}>Products</NavLink>
            <NavLink to="/pricing" className={activeFxn}>Pricing</NavLink>
            <NavLink to="/about" className={activeFxn}>About</NavLink>
            <NavLink to="/contact" className={activeFxn}>Contact</NavLink>
            {emailVerified ?
            <Tooltip title={`Welcome, ${name}`}>
            <Avatar alt={name} src={[photoURL]} /></Tooltip>  
            : <NavLink to="/signin" className={activeFxn}>Sign In</NavLink>}
            {emailVerified ? <div>Sign out</div> : <NavLink to="/signup" className="text-white px-4 py-2 rounded-md brand_color_bg hover:bg-orange-600">Sign Up</NavLink>}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Products</Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <Link to="/signin" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sign In</Link>
              <Link to="/signup" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
