import instructorImg from "../assets/instructor.png"; // adjust path as needed

const About = () => (
  <section className="bg-white py-5 px-3">
    <div className="container">
      <div className="row align-items-center">
        {/* Left Side - Circle with Instructor Image */}
        <div className="col-md-5 mb-4 mb-md-0 position-relative d-flex justify-content-center">
          <div
        className="rounded-circle position-relative d-flex justify-content-center align-items-center"
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "#ffc0cb",
        }}
          >
        {/* Curved Text using SVG */}
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <defs>
            <path
          id="curve"
          d="M 50,150
             a 100,100 0 1,1 200,0"
          fill="none"
            />
          </defs>
          <text
            width="100%"
            style={{
          fontSize: "1.1rem",
          fill: "#db2777",
          fontWeight: 600,
          letterSpacing: "2px",
            }}
          >
            <textPath
          xlinkHref="#curve"
          startOffset="0"
          textAnchor="start"
          alignmentBaseline="middle"
            >
          Meet our instructor, Sadia
            </textPath>
          </text>
        </svg>
          </div>
          <img
        src={instructorImg}
        alt="Instructor"
        className="position-absolute rounded-circle border border-white shadow"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          top: "30px",
          backgroundColor: "transparent",
          zIndex: 3,
        }}
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-7 text-center text-md-start">
          <h2 className="h1 fw-semibold mb-4" style={{ color: "#db2777" }}>
            About the Classes
          </h2>
          <p
            className="lead text-secondary mx-auto mx-md-0"
            style={{ maxWidth: "700px" }}
          >
            Our stitching classes are designed for all skill levels. Whether
            you're just starting or looking to master advanced techniques,
            you'll find a warm, welcoming space to grow. Our goal is to equip
            you with the confidence to start your own projects.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
