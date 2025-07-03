const Contact = () => (
  <section className="text-center py-5 px-3" style={{ backgroundColor: '#ffe4e6' }}>
    <div className="container">
      <h2 className="h1 fw-semibold mb-3" style={{ color: 'pink' }}>
        Get in Touch
      </h2>
      <p className="lead text-secondary mb-4">
        Interested in joining a class? Let's get you started!
      </p>
            <button
        className="btn px-4 py-2"
        style={{
          backgroundColor: '#ec4899', // Tailwind pink-500
          color: 'white',
          borderRadius: '999px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = '#db2777')} // Tailwind pink-600
        onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = '#ec4899')}
      >
        Join a Class
      </button>
    </div>
  </section>
);

export default Contact;
