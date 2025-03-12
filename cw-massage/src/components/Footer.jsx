function Footer() {
    return (
      <footer className="bg-gray-900 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} CW Massage and Personal Training. All rights reserved.</p>
          <p>
            <a href="mailto:info@cwmassage.com" className="hover:text-gray-400">
              info@cwmassage.com
            </a>
            {" | "}
            <a href="tel:+1234567890" className="hover:text-gray-400">
              +44 7971 098714
            </a>
          </p>
          {/* Credit Section */}
          <p className="mt-2 text-sm">
            Website built by{" "}
            <a href="https://kinnaird.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:underline">
              Kieran Kinnaird
            </a>
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  