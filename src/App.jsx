import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HypeStrip from './components/HypeStrip';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black font-sans">
        <Navbar />
        <Hero />
        <HypeStrip />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
