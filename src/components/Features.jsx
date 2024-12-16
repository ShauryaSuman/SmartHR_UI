import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import offerLettersImg from '../assets/offer_letter.svg';
import jobDescImg from '../assets/job_desc.svg';
import onboardingImg from '../assets/onboarding.svg';
import hrDocTemplate from '../assets/hr_doc_template.svg';

const FeatureSection = ({ title, description, image, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`relative min-h-screen flex items-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'
        } overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`w-1/2 h-full ${index % 2 === 0 ? 'order-1' : 'order-2'
          } flex justify-center items-center bg-cover bg-center`}
      // style={{ backgroundImage: `url(${image})` }}

      >
        <img src={image} alt={title} className="h-full object-cover w-10/12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className={`w-1/2 h-full p-16 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'
          }`}
      >
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900 brand_color_text">{title}</h2>
        <p className="text-lg text-gray-700">{description}</p>
      </motion.div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'AI-Powered Offer Letters',
      description: 'Generate professional offer letters in seconds with our advanced AI technology. Automate your hiring process with personalized and professional templates.',
      image: offerLettersImg,
    },
    {
      title: 'Job Description Generator',
      description: 'Create compelling job descriptions tailored to your company needs. Ensure clarity and accuracy in every role description with AI assistance.',
      image: jobDescImg,
    },
    {
      title: 'Onboarding Plans',
      description: 'Customize and automate employee onboarding processes effortlessly. Welcome new hires with detailed, structured, and engaging onboarding plans.',
      image: onboardingImg,
    },
    {
      title: 'HR Document Templates',
      description: 'Access a vast library of AI-generated HR document templates. Save time and ensure consistency across your organization with professional-grade templates.',
      image: hrDocTemplate,
    },
  ];

  return (
    <div className="w-full" style={{ background: 'linear-gradient(to right, #ffff, #f9e1d6)' }}>
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} index={index} />
      ))}
    </div>
  );
};

export default Features;