import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { FaPlus, FaCheckCircle, FaSignOutAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ClientDashboard = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('new'); // 'new' or 'history'
    const [submitted, setSubmitted] = useState(false);

    // Form State
    const [projectData, setProjectData] = useState({
        title: '',
        type: 'Web Development',
        budget: '',
        timeline: '',
        description: '',
    });

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // ----------------------------------------------------------------------
        // 📧 EMAILJS CONFIGURATION
        // Keys are loaded from user's .env file (VITE_EMAILJS_SERVICE_ID, etc.)
        // ----------------------------------------------------------------------
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        // ----------------------------------------------------------------------

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            alert("⚠️ EmailJS is not configured.\nPlease add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.");
            console.error("Missing EmailJS keys in .env file");
            return;
        }

        const templateParams = {
            to_email: user?.email,      // Sends to the logged-in user (or use a specific admin email)
            from_name: user?.name || "Unknown User",
            reply_to: user?.email || "No Email",
            message: projectData.description,

            // Project Details
            title: projectData.title,
            type: projectData.type,
            budget: projectData.budget,
            timeline: projectData.timeline,
        };

        console.log("DEBUG: Current User:", user);
        console.log("DEBUG: Sending Email Params:", templateParams);

        if (!templateParams.to_email) {
            alert("Error: User email is missing. Please log out and log in again.");
            return;
        }

        setSubmitted(false);

        const token = localStorage.getItem('nexus_token');
        if (token) {
            fetch('http://localhost:8000/projects/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(projectData)
            }).then(res => {
                if (res.ok) console.log("Project saved to database");
                else console.error("Failed to save project to database");
            }).catch(err => console.error("Error saving project:", err));
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
                setProjectData({
                    title: '',
                    type: 'Web Development',
                    budget: '',
                    timeline: '',
                    description: '',
                });
                setTimeout(() => setSubmitted(false), 5000);
            }, (err) => {
                console.log('FAILED...', err);
                // Detailed error for debugging
                alert(`Failed to send email. Error: ${err.text || JSON.stringify(err)}. Please check your keys in .env`);
            });
    };

    const handleChange = (e) => {
        setProjectData({ ...projectData, [e.target.name]: e.target.value });
    };

    if (loading || !user) return null;

    return (
        <div className="min-h-screen bg-dark pt-24 pb-10 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                        <p className="text-gray-400">Welcome back, {user.name}</p>
                    </div>
                    <button
                        onClick={() => { logout(); navigate('/'); }}
                        className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                    >
                        <FaSignOutAlt /> Sign Out
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar / Stats */}
                    <div className="space-y-6">
                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <h3 className="text-gray-400 text-sm font-bold uppercase mb-4">Active Projects</h3>
                            <div className="text-4xl font-bold text-white mb-2">0</div>
                            <p className="text-sm text-gray-500">Start a new project to get moving.</p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <h3 className="text-gray-400 text-sm font-bold uppercase mb-4">Total Spent</h3>
                            <div className="text-4xl font-bold text-white mb-2">$0</div>
                            <p className="text-sm text-gray-500">Lifetime investment.</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold text-white">Start New Project</h2>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-500/10 border border-green-500/50 p-8 rounded-xl text-center"
                                >
                                    <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Requirement Received!</h3>
                                    <p className="text-gray-300">We'll review your brief and get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-primary hover:underline"
                                    >
                                        Submit another project
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-400 text-sm font-bold mb-2">Project Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={projectData.title}
                                                onChange={handleChange}
                                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                                                placeholder="e.g. E-commerce Redesign"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm font-bold mb-2">Project Type</label>
                                            <select
                                                name="type"
                                                value={projectData.type}
                                                onChange={handleChange}
                                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                                            >
                                                <option>Web Development</option>
                                                <option>Mobile App</option>
                                                <option>UI/UX Design</option>
                                                <option>AI/ML Solution</option>
                                                <option>Consulting</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-400 text-sm font-bold mb-2">Budget Range (USD)</label>
                                            <input
                                                type="text"
                                                name="budget"
                                                value={projectData.budget}
                                                onChange={handleChange}
                                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                                                placeholder="e.g. $5,000 - $10,000"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm font-bold mb-2">Expected Timeline</label>
                                            <input
                                                type="text"
                                                name="timeline"
                                                value={projectData.timeline}
                                                onChange={handleChange}
                                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                                                placeholder="e.g. 4 weeks"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm font-bold mb-2">Project Description</label>
                                        <textarea
                                            name="description"
                                            value={projectData.description}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors h-32"
                                            placeholder="Describe your goals, features, and target audience..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaPlus /> Submit Requirements
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
