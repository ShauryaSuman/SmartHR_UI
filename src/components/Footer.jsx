import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-white' style={{background:"#9a5f32"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Bytical Solutions</h3>
            <p className="mt-4 text-white">
              Simplifying your HR tasks with AI-driven tools. Generate offer letters,
              job descriptions, onboarding plans, and more effortlessly.
            </p>
          </div>
          <div className="text-center w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <p className="mt-4 text-white">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-md brand_color_bg hover:bg-orange-600 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bytical Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;