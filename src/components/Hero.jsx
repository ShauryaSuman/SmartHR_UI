import React from 'react';
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const HeroSection = () => {
  return (
    <motion.div 
      style={{ background: 'linear-gradient(to right, #ffff, #f9e1d6)' }} 
      className="pt-20 relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex flex-col justify-center items-center hero_section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Streamline Your HR Tasks</span>
            <span className="block brand_color_text">with AI-Powered Solutions</span>
          </h1>
          <motion.p 
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Generate offer letters, job descriptions, and onboarding plans instantly with our advanced AI technology.
            Save time and improve consistency in your HR processes.
          </motion.p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <motion.div 
              className="rounded-md shadow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 brand_color_bg">
                Get Started
              </a>
            </motion.div>
            <motion.div 
              className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Watch Demo
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* <Tooltip title="Scroll Down to View More...">
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="w-6 h-6 text-gray-900" />
        </div>
      </Tooltip> */}
    </motion.div>
  );
};

export default HeroSection;