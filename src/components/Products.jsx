import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const userInfo = useSelector(state=>state.login.userInfo);
    const products = [
        {
            name: 'Offer Letter Generator',
            description: "Create professional offer letters tailored to your company's needs.",
            icon: '📝',
            navigateTo: "/job-description-generator"
        },
        {
            name: 'Job Description Generator',
            description: 'Generate compelling job descriptions to attract top talent.',
            icon: '💼',
        },
        {
            name: 'Onboarding Planner',
            description: 'Automate and customize the onboarding process for new hires.',
            icon: '🚀',
        },
        {
            name: 'HR Document Templates',
            description: 'Access a library of AI-generated HR document templates.',
            icon: '📄',
        },
    ];

    return (
        <div className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Products
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Explore the tools that make HR tasks effortless.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className="flex items-start cursor-pointer p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            onClick={() => {
                                if (product?.navigateTo) {
                                    navigate(userInfo?.emailVerified ? product?.navigateTo : '/signin')
                                }
                            }}
                            aria-label={`Navigate to ${product.name}`}
                        >
                            <div className="text-4xl mr-6">{product.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {product.name}
                                </h3>
                                <p className="mt-2 text-gray-700">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
