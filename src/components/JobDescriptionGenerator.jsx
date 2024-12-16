import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { axiosInstance } from '../../axios';
import Preview from './Preview';
import { Button, CircularProgress } from '@mui/material';

const JobDescriptionGenerator = () => {
    const [formData, setFormData] = useState({
        jobTitle: 'Data scientist',
        department: 'analytics',
        experience: 10,
        location: 'On-site',
        qualifications: 'btech',
        skills: 'python',
        responsibilities: 'work',
        // salaryRange: [0, 100],
    });
    const [showModal, setShowModal] = useState(false);
    const [disableBtn, setDisableBtn]=useState(false);
    const [generatedDescription, setGeneratedDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSliderChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisableBtn(true);
        try {
            const response = await axiosInstance.post('/generate_jd', formData);
            setGeneratedDescription(response?.data);
            setShowModal(true);

        } catch (error) {
            console.error('Error generating job description:', error);
        }
    };

    return (
        <div className="py-12 bg-white">
            <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-xl ">
                <h2 className="text-3xl font-bold text-center mb-6">Job Description Generator</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Job Title *</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none"
                                placeholder="e.g., Senior Software Engineer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Department *</label>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none"
                                placeholder="e.g., Engineering"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Required Experience (years)</label>
                            <input
                                type="range"
                                name="experience"
                                min="0"
                                max="20"
                                value={formData.experience}
                                onChange={(e) => handleSliderChange('experience', e.target.value)}
                                className="w-full slider"
                            />
                            <span>{formData.experience}</span>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Work Location *</label>
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none"
                            >
                                <option>On-site</option>
                                <option>Remote</option>
                                <option>Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Qualification Required *</label>
                            <textarea
                                name="qualifications"
                                value={formData.qualifications}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none"
                                placeholder="e.g., B.Tech in Computer Science"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Required Skills *</label>
                            <textarea
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none"
                                placeholder="e.g., Python, Java, Cloud platforms"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium">Key Responsibilities *</label>
                            <textarea
                                name="responsibilities"
                                value={formData.responsibilities}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none"
                                placeholder="List main duties and responsibilities"
                            />
                        </div>
                        {/* <div className="md:col-span-2">
                            <label className="block text-sm font-medium">Salary Range (LPA)</label>
                            <input
                                type="range"
                                name="salaryRange"
                                min="0"
                                max="100"
                                value={formData.salaryRange[1]}
                                onChange={(e) => handleSliderChange('salaryRange', [0, e.target.value])}
                                className="w-full"
                            />
                            <span>{formData.salaryRange[0]} - {formData.salaryRange[1]}</span>
                        </div> */}
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-3 px-4 text-white font-medium rounded-md shadow-sm focus:outline-none brand_color_bg"
                        disabled={disableBtn}
                    >
                        <div className='flex justify-center align-center'>
                            <div className='mr-3  text-white'>Generate Job Description</div>
                            {disableBtn && <CircularProgress size="20px" />}
                        </div>
                    </Button>
                </form>

                {/* {generatedDescription && (
                    <div className="mt-8 p-4 bg-gray-700 rounded-md">
                        <h3 className="text-xl font-bold mb-4">Generated Job Description</h3>
                        <ReactMarkdown>{generatedDescription}</ReactMarkdown>
                    </div>
                )} */}

                {
                    showModal && <Preview showModal={showModal} setShowModal={setShowModal} data={generatedDescription} />
                }

            </div>
        </div>
    );
};

export default JobDescriptionGenerator;