import topLeft from "../assets/homepage-decor/top-left-measuring-tape.png";
import bottomLeft from "../assets/homepage-decor/bottom-left-buttons.png";
import bottomRight from "../assets/homepage-decor/bottom-right-cloth.png";
import backgroundImage from "../assets/homepage-decor/main-background.png";
import slogan from "../assets/homepage-decor/slogan.png";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 461px) {
        .responsive-decor {
          width: 125vw !important;
        }
        .slogan-image {
          width: 80vw !important;
          margin-top: 1rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3"
      style={{
        backgroundColor: "white",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative Images */}
      <img
        src={topLeft}
        alt="Measuring Tape Decoration"
        className="position-absolute responsive-decor"
        style={{ top: 0, left: 0, width: "70vw", zIndex: 0 }}
      />
      <img
        src={bottomLeft}
        alt="Button Decoration"
        className="position-absolute responsive-decor"
        style={{ bottom: 0, left: 0, width: "70vw", zIndex: 0 }}
      />
      <img
        src={bottomRight}
        alt="Cloth Decoration"
        className="position-absolute responsive-decor"
        style={{ bottom: 0, right: 0, width: "70vw", zIndex: 0 }}
      />

      {/* Main Content */}
      <div style={{ zIndex: 1 }}>
        <h1 className="display-3 fw-bold mb-3" style={{ color: "#db2777" }}>
          Start to Stitch
        </h1>
        <img
          src={slogan}
          alt="From First Stitch to Masterpiece"
          className="slogan-image mb-4"
          style={{
            width: "60vw",
            maxWidth: "500px",
            zIndex: 1,
          }}
        />
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "600px", marginBottom: "1.5rem" }}
        >
          Personalized lessons, flexible scheduling, and a supportive space for
          all skill levels.
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
};

export default HeroSection;
