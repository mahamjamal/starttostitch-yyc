interface DealCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  onClick: () => void;
  badgeText?: string; // e.g. "New", "Hot"
}

const DealCard = ({ title, description, isSelected, onClick, badgeText }: DealCardProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        padding: "1.5rem",
        borderRadius: "12px",
        background: isSelected ? "linear-gradient(135deg, #f9c5d1, #ec4899)" : "#fff",
        boxShadow: isSelected
          ? "0 10px 30px rgba(236, 72, 153, 0.5)"
          : "0 4px 12px rgba(0,0,0,0.1)",
        transform: isSelected ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        position: "relative",
        textAlign: "center",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {badgeText && (
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "#ec4899",
            color: "white",
            padding: "0.3rem 0.8rem",
            borderRadius: "9999px",
            fontWeight: "bold",
            fontSize: "0.75rem",
            boxShadow: "0 2px 6px rgba(236, 72, 153, 0.4)",
          }}
        >
          {badgeText}
        </span>
      )}
      <h3 style={{ color: "#d6336c", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ color: "#7e2a57", fontWeight: "500", fontSize: "1rem" }}>
        {description}
      </p>
    </div>
  );
};

export default DealCard;
