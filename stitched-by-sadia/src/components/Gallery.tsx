import beginnerImg from "../assets/beginner.png";
import intermediateImg from "../assets/intermediate.png";
import advancedImg from "../assets/advanced.png";

const baseImages = [beginnerImg, intermediateImg, advancedImg];
const baseAlts = ["Beginner Class", "Intermediate Class", "Advanced Class"];

// Create 5 images (can include repeats)
const images = Array.from({ length: 5 }, () => {
  const idx = Math.floor(Math.random() * baseImages.length);
  return { src: baseImages[idx], alt: baseAlts[idx] };
});

const rotations = ["-4deg", "3deg", "-2deg", "2deg", "-3deg", "4deg"];

const Gallery = () => {
  return (
    <section className="bg-white py-4 px-3" style={{ width: "100%" }}>
      <div className="container text-center" style={{ maxWidth: "100%" }}>
        <h2 className="h2 fw-semibold mb-4" style={{ color: "#db2777" }}>
          A Sneak Peek Into Our Classes!
        </h2>

        <div
          className="image-scroll-container"
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "10px",
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "12px 12px 30px 12px",
                boxShadow:
                  "0 8px 12px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0,0,0,0.05)",
                borderRadius: "8px",
                width: "250px",
                flex: "0 0 auto",
                transform: `rotate(${rotations[index % rotations.length]})`,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "4px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    userSelect: "none",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Indie Flower', cursive",
                  fontSize: "1rem",
                  color: "#333",
                  textAlign: "center",
                  margin: "10px 0 0",
                  userSelect: "none",
                }}
              >
                {item.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .image-scroll-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
        .image-scroll-container {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
      `}</style>
    </section>
  );
};

export default Gallery;
