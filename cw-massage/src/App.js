import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from "./pages/Contact";

function Home() {
  return (
    <section className="text-center p-8">
      {/* Hero Section */}
      <div className="relative bg-[var(--deep-teal)] text-white py-20 px-6 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Relax. Recover. Rejuvenate.</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Experience expert massage therapy tailored to your needs. Step into a space of relaxation and healing.
        </p>
        <div className="mt-6">
          <a href="/services" className="btn-primary">View Services</a>
        </div>
      </div>

      {/* Services Preview */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-[var(--deep-teal)] mb-6">Our Treatments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--deep-teal)]">Swedish Massage</h3>
            <p className="text-gray-700">A relaxing full-body massage to relieve stress and improve circulation.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--deep-teal)]">Sports Massage</h3>
            <p className="text-gray-700">Designed for athletes and active individuals to reduce tension and aid recovery.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--deep-teal)]">Hot Stones Massage</h3>
            <p className="text-gray-700">A warm, soothing treatment to ease muscle stiffness and promote relaxation.</p>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-6">
          <a href="/services" className="btn-outline">View More Services</a>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16 bg-[var(--warm-beige)] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[var(--deep-teal)] mb-4">What Clients Say</h2>
        <p className="italic text-lg">"An amazing massage therapist! I always leave feeling refreshed and pain-free!"</p>
        <p className="mt-2 font-semibold">- Happy Client</p>
      </div>
    </section>
  );
}





function About() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-60 bg-cover bg-center rounded-lg shadow-md"
        style={{ backgroundImage: "url('/deeptissue.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-4xl font-bold">
          Meet Your Therapist
        </div>
      </div>

      {/* About Content */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-[var(--deep-teal)] mb-6">About Me</h1>
          <p className="text-lg mb-4">
            Hi, i'm Caroline. I am a dedicated massage therapist and personal trainer based in Foveran. With a fully private gym and a purpose-built massage clinic,  
            I specialize in providing expert therapies to help my clients relax, recover, and rejuvenate.
          </p>
          <p className="text-lg mb-4">
            My goal is to help you achieve pain relief, improved mobility, and overall well-being through a range of tailored treatments.
          </p>
        </div>

        {/* Image Section */}
        <img src="/deeptissue.jpg" alt="Massage Therapy" className="md:w-1/2 rounded-lg shadow-lg" />
      </div>

      {/* Hobbies & Interests */}
      <div className="mt-16 bg-[var(--warm-beige)] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[var(--deep-teal)] mb-4">Beyond the Clinic</h2>
        <p className="text-lg">
          When I’m not working with clients, you’ll find me hiking scenic trails, traveling, and enjoying time with my two dogs, Ivy & Rudy.
          My passion for well-being and fitness drives my approach to helping others feel their best.
        </p>
      </div>
    </section>
  );
}







const services = [
  { title: "Swedish Massage", description: "A relaxing full-body massage to reduce stress and promote circulation." },
  { title: "Sports & Remedial Massage", description: "Designed for athletes and active individuals to aid recovery and flexibility." },
  { title: "Cupping Therapy", description: "Uses suction cups to relieve muscle tension and improve blood flow." },
  { title: "Medical Acupuncture", description: "A therapeutic technique for pain relief using fine needles." },
  { title: "Kinetic Chain Release", description: "A gentle series of stretches to bring the body into balance." },
  { title: "Indian Head Massage", description: "A deeply relaxing massage focusing on the head, neck, and shoulders." },
  { title: "Oncology Massage", description: "Specialized care for those undergoing or recovering from cancer treatment." },
  { title: "Hot Stones Massage", description: "A warming therapy that melts tension and promotes deep relaxation." },
  { title: "Personal Training", description: "Tailored fitness programs in a private gym setting." },
];

function Services() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-[var(--deep-teal)]">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform hover:scale-105 hover:border-[var(--primary-turquoise)]">
            <h2 className="text-2xl font-semibold mb-2 text-[var(--deep-teal)]">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
