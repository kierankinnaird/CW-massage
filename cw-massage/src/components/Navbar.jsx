import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CW.jpg"; // Ensure this matches your logo file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="CW Massage Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold text-[var(--deep-teal)] hidden md:inline-block">
            CW Massage and Personal Training
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--deep-teal)] focus:outline-none"
        >
          ☰
        </button>

        {/* Navbar Links - Properly Positioned for Desktop */}
        <ul
          className={`md:flex md:gap-8 md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in ${
            isOpen ? "flex flex-col items-center" : "hidden"
          } md:flex-row md:items-center md:ml-auto p-4 md:p-0 z-50`}
        >
          <li><Link to="/" className="hover:text-[var(--primary-turquoise)]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[var(--primary-turquoise)]">About</Link></li>
          <li><Link to="/services" className="hover:text-[var(--primary-turquoise)]">Services</Link></li>
          <li><Link to="/contact" className="hover:text-[var(--primary-turquoise)]">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
