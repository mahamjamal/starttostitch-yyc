import beginnerImg from '../assets/beginner.png';
import intermediateImg from '../assets/intermediate.png';
import advancedImg from '../assets/advanced.png';

const Gallery = () => (
  <section className="bg-white py-5 px-3">
    <div className="container text-center">
      <h2 className="h1 fw-semibold mb-5" style={{ color: "pink" }}>
        Stitching Class Gallery
      </h2>

      <div
        id="galleryCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded shadow-sm">
          {[
            {beginnerImg, alt: "Beginner Class"},
            {intermediateImg, alt: "Intermediate Class"},
            {advancedImg, alt: "Advanced Class"},
            
          ].map((src, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={src}
                className="d-block w-100"
                alt={`Gallery ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
);

export default Gallery;
