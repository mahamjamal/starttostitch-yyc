import beginnerImg from "../assets/beginner.png";
import intermediateImg from "../assets/intermediate.png";
import advancedImg from "../assets/advanced.png";
import { useRef, useEffect } from "react";

const baseImages = [beginnerImg, intermediateImg, advancedImg];
const baseAlts = ["Beginner Class", "Intermediate Class", "Advanced Class"];

const images = Array.from({ length: 15 }, () => {
  const idx = Math.floor(Math.random() * baseImages.length);
  return { src: baseImages[idx], alt: baseAlts[idx] };
});

const rotations = ["-4deg", "3deg", "-2deg", "2deg", "-3deg", "4deg", "-1deg", "1deg"];

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // pixels per frame, adjust for speed

    const step = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // reset scroll to start for infinite loop effect
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate the images to create seamless looping effect
  const scrollingImages = [...images, ...images];

  return (
    <section
      className="bg-white py-4 px-3"
      style={{ width: "100%", overflowX: "hidden" }}
    >
      <div className="container text-center" style={{ maxWidth: "100%" }}>
        <h2 className="h2 fw-semibold mb-4" style={{ color: "pink" }}>
          A Sneak Peak Into Our Classes!
        </h2>

        <div
          ref={scrollContainerRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "10px",
            gap: "20px",
            userSelect: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory", // optional, for nice snap if user scrolls manually
            scrollbarWidth: "none",
          }}
        >
          {scrollingImages.map((item, index) => (
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
                transition: "transform 0.3s ease",
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
        /* Hide scrollbar - Chrome, Safari, Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar - Firefox */
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
