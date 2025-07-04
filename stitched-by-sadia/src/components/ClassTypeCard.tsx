interface ClassTypeCardProps {
  title: string;
  description: string;
  image?: string;
  isSelected?: boolean;
  onClick: () => void;
  extra?: {
    ageGroup: string;
    whatToExpect: string;
    price: string;
  };
}

const ClassTypeCard = ({
  title,
  description,
  image,
  isSelected,
  onClick,
  extra,
}: ClassTypeCardProps) => {
  return (
    <div
      className="card border-0 rounded-4 text-center p-3 d-flex align-items-center justify-content-center h-100"
      style={{
        backgroundColor: isSelected ? "#fcd6e3" : "#fff", // light pink if selected
        cursor: "pointer",
        transition: "all 0.3s ease",
        minHeight: "340px",
      }}
      onClick={onClick}
    >
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        {isSelected ? (
          <div
            style={{
              backgroundColor: "#ffe6f0", // very light pink background for details area
              borderRadius: "12px",
              padding: "1rem 1.5rem",
              width: "100%",
              maxWidth: "280px",
              color: "#b8326d", // dark rose color for text
              fontSize: "0.9rem",
              lineHeight: "1.4",
              boxShadow: "0 4px 10px rgba(184, 50, 109, 0.15)",
            }}
          >
            <h5
              className="fw-bold mb-3"
              style={{
                backgroundColor: "#d6336c", // deeper pink
                color: "white",
                borderRadius: "0.5rem",
                padding: "0.4rem 0",
                textAlign: "center",
              }}
            >
              {title}
            </h5>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Age Group:</strong> {extra?.ageGroup}
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>What to Expect:</strong> {extra?.whatToExpect}
            </p>
            <p>
              <strong>Price:</strong> {extra?.price}
            </p>
          </div>
        ) : (
          <>
            {image && (
              <img
                src={image}
                alt={title}
                style={{
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "1rem",
                  maxWidth: "100%",
                }}
              />
            )}
            <h5 className="fw-bold mb-2 text-wrap" style={{ color: "pink" }}>
              {title}
            </h5>
            <p className="text-secondary small px-3 text-wrap text-break">
              {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ClassTypeCard;
