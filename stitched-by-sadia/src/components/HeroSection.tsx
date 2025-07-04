import topLeft from "../assets/homepage-decor/top-left-measuring-tape.png";
import bottomLeft from "../assets/homepage-decor/bottom-left-buttons.png";
import bottomRight from "../assets/homepage-decor/bottom-right-cloth.png";
import { useEffect } from "react";

const HeroSection = () => {
  // Add this effect once to inject responsive image styles into the document
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 461px) {
        .responsive-decor {
          width: 125vw !important;
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
      style={{ backgroundColor: "#ffe4e6" }}
    >
      {/* Decorative PNGs */}
      <img
        src={topLeft}
        alt="Top Left Decoration"
        className="position-absolute responsive-decor"
        style={{ top: 0, left: 0, width: "70vw", zIndex: 0 }}
      />
      <img
        src={bottomLeft}
        alt="Bottom Left Decoration"
        className="position-absolute responsive-decor"
        style={{ bottom: 0, left: 0, width: "70vw", zIndex: 0 }}
      />
      <img
        src={bottomRight}
        alt="Bottom Right Decoration"
        className="position-absolute responsive-decor"
        style={{ bottom: 0, right: 0, width: "70vw", zIndex: 0 }}
      />

      {/* Main content (unchanged) */}
      <div style={{ zIndex: 1 }}>
        <h1 className="display-3 fw-bold mb-4" style={{ color: "pink" }}>
          Start to Stitch YYC
        </h1>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Personalized lessons, flexible scheduling, and a suppoortive space for
          all skill levels.
        </p>
        <button
          className="btn px-4 py-2"
          style={{
            backgroundColor: "#ec4899",
            color: "white",
            borderRadius: "999px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#db2777")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#ec4899")
          }
        >
          Join a Class
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
