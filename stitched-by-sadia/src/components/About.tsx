import instructorImg from "../assets/instructor.png"; // adjust path as needed

const About = () => (
  <section className="bg-white py-5 px-3">
    <div className="container">
      <div className="row align-items-center">
        {/* Left Side - Circle with Instructor Image */}
        <div className="col-md-5 mb-4 mb-md-0 position-relative d-flex justify-content-center">
          <div
            className="rounded-circle"
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#ffc0cb",
              position: "relative",
            }}
          />
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
            }}
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-7 text-center text-md-start">
          <h2 className="h1 fw-semibold mb-4" style={{ color: "pink" }}>
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
