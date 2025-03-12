function Contact() {
    return (
      <section className="p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[var(--deep-teal)] mb-6">Get in Touch</h1>
        <p className="text-lg mb-4">Have a question or want to book a session? Reach out via WhatsApp or Facebook.</p>
  
        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/07971098714" // 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.51 3.67 1.39 5.2L2 22l4.81-1.28C8.33 21.49 10.11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zM7 10c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm2.5 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm2.5 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm2.5 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm2.5 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
            </svg>
            Chat on WhatsApp
          </a>
  
          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/CWPersonalTrainingandMassage" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.86 8 9.79v-6.97H7v-2.82h3v-2.15c0-2.96 1.79-4.59 4.47-4.59 1.28 0 2.62.23 2.62.23v2.91H16.5c-1.48 0-1.94.92-1.94 1.87v2.14h3.28l-.52 2.82h-2.76V22c4.56-.93 8-4.95 8-9.79z" />
            </svg>
            Visit Facebook Page
          </a>
        </div>
  
        {/* Direct Contact Info */}
        <div className="mt-8 text-lg">
          {/*<p>Email: <a href="mailto:info@cwmassage.com" className="text-[var(--primary-turquoise)] hover:underline">info@cwmassage.com</a></p>*/}
          <p>Phone: <a href="tel:+1234567890" className="text-[var(--primary-turquoise)] hover:underline">+44 7971 098714</a></p>
        </div>
      </section>
    );
  }
  
  export default Contact;
  