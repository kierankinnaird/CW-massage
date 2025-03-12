import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} CW Massage. All rights reserved.</p>
        <p>
          <a href="mailto:info@cwmassage.com" className="hover:text-gray-400">
            info@cwmassage.com
          </a>
          {' | '}
          <a href="tel:+1234567890" className="hover:text-gray-400">
            +1 (234) 567-890
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
