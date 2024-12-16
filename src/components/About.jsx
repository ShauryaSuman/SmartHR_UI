import React from 'react';
import aboutUsImg from '../assets/about_us.svg'
import Footer from './Footer';

const About = () => {
  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Empowering HR departments with AI-driven solutions to simplify and enhance their workflows.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='w-3/4'>
              <img
                src={aboutUsImg}
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                At HR AI Solutions, our mission is to revolutionize the HR industry by leveraging artificial intelligence to automate and optimize essential HR tasks. We aim to save businesses time and resources, allowing them to focus on what truly matters—building strong teams and fostering a positive workplace culture.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                Our Team
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Our dedicated team of experts combines extensive experience in human resources and cutting-edge technology to deliver top-notch AI tools tailored to your company's unique needs. We are passionate about driving efficiency and enhancing the HR experience for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;