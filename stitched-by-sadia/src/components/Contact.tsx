const Contact = () => (
  <section
    className="text-center py-5 px-3"
    style={{ backgroundColor: "#ffe4e6" }}
  >
    <div className="container">
      <h2 className="h1 fw-semibold mb-3" style={{ color: "#db2777" }}>
        Get in Touch
      </h2>
      <p className="lead text-secondary mb-4">
        Interested in joining a class? Let's get you started!
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdnlXbNdGDuTocw4UlDtRE1y2LNssMhyPtaVB7lIWdePpOdKQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="btn px-4 py-2"
        style={{
          backgroundColor: "#ec4899",
          color: "white",
          borderRadius: "999px",
          transition: "background-color 0.3s ease",
          display: "inline-block",
          textDecoration: "none",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLAnchorElement).style.backgroundColor = "#db2777")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLAnchorElement).style.backgroundColor = "#ec4899")
        }
      >
        Join a Class
      </a>
    </div>
  </section>
);

export default Contact;
