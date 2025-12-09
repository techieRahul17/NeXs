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
        // Please replace the placeholders below with your actual EmailJS keys.
        // Sign up at https://www.emailjs.com/ to get these.
        // ----------------------------------------------------------------------
        const SERVICE_ID = "YOUR_SERVICE_ID";   // e.g. "service_x9s2k3"
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g. "template_8d7f3h"
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";   // e.g. "user_K2s8S9d2"
        // ----------------------------------------------------------------------

        if (SERVICE_ID === "YOUR_SERVICE_ID") {
            alert("⚠️ Please configure your EmailJS keys in ClientDashboard.jsx to send emails.");
            return;
        }

        const templateParams = {
            title: projectData.title,
            type: projectData.type,
            budget: projectData.budget,
            timeline: projectData.timeline,
            description: projectData.description,
            user_name: user?.name || "Unknown User",
            user_email: user?.email || "No Email"
        };

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
                alert("Failed to send email. Please check your internet connection or API keys.");
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
