import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '$0/month',
            features: [
                'Generate up to 10 offer letters/month',
                'Job Description Templates',
                'Basic Onboarding Plans',
                'Email Support',
            ],
            buttonText: 'Get Started for Free',
            buttonLink: '#',
        },
        {
            name: 'Pro',
            price: '$49/month',
            features: [
                'Generate up to 100 offer letters/month',
                'Advanced Job Description Generator',
                'Custom Onboarding Plans',
                'Priority Email Support',
                'Analytics Dashboard',
            ],
            buttonText: 'Upgrade to Pro',
            buttonLink: '#',
        },
        {
            name: 'Business',
            price: '$199/month',
            features: [
                'Unlimited Offer Letters',
                'Full Customization for Job Descriptions',
                'Automated Onboarding Workflows',
                'Dedicated Account Manager',
                '24/7 Priority Support',
                'Integration with HR Systems',
            ],
            buttonText: 'Contact Us',
            buttonLink: '#',
        },
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Pricing Plans
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Choose a plan that fits your company's needs.
                    </p>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="px-6 py-8 bg-white">
                                <h3 className="text-center text-lg leading-6 font-medium text-gray-900">
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex items-center justify-center">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        {plan.price}
                                    </span>
                                    {/* <span className="ml-1 text-xl font-medium text-gray-500">
                                        /month
                                    </span> */}
                                </div>
                            </div>
                            <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="flex-shrink-0 h-6 w-6 text-green-500">
                                                {/* Check icon */}
                                                <svg
                                                    className="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="ml-3 text-base text-gray-700">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href={plan.buttonLink}
                                        className={`block w-full text-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium ${plan.name === 'Free'
                                                ? 'text-blue-600 brand_color_text hover:bg-gray-50'
                                                : 'text-white brand_color_bg hover:bg-orange-600'
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;