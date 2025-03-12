import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Home() {
  return (
    <section className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to CW Massage</h1>
      <p className="text-lg">
        Experience expert massage therapy tailored to your needs. Relax, recover, and rejuvenate.
      </p>
      <div className="mt-6">
        <a href="/services" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          View Services
        </a>
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        CW Massage is dedicated to providing top-quality massage therapy to help you recover and feel your best.
      </p>
      <p className="mt-4">
        Our trained professionals specialize in Swedish, Deep Tissue, and Sports massages.
      </p>
    </section>
  );
}


function Services() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-2">
        <li>✔️ Swedish Massage - Relaxation and stress relief.</li>
        <li>✔️ Deep Tissue Massage - Relieves muscle tension.</li>
        <li>✔️ Sports Massage - Injury prevention & recovery.</li>
        <li>✔️ Aromatherapy Massage - Essential oil therapy.</li>
      </ul>
      <div className="mt-6">
        <a href="/about" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More About Us
        </a>
      </div>
    </section>
  );
}


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
