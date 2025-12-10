import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ForClients from './pages/ForClients';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HypeStrip from './components/HypeStrip';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Footer from './components/Footer';

import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ClientDashboard from './pages/ClientDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <HypeStrip />
                <Services />
                <Portfolio />
                <WhyUs />
                <Process />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <ClientDashboard />
              </ProtectedRoute>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
