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
      className="card border-0 rounded-4 text-center p-3 d-flex align-items-center justify-content-center"
      style={{
        aspectRatio: '1 / 1',
        minHeight: '320px',
        backgroundColor: isSelected ? '#fcd6e3' : '#fff', // lighter pink
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onClick={onClick}
    >
      {isSelected ? (
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <h5
            className="fw-bold mb-3 px-3 py-2"
            style={{
              backgroundColor: 'pink',
              color: 'white',
              borderRadius: '0.5rem',
              width: '100%',
              maxWidth: '260px',
            }}
          >
            {title}
          </h5>
          <p className="text-pink-600 small mb-2">
            <strong>Age Group:</strong> {extra?.ageGroup}
          </p>
          <p className="text-pink-600 small mb-2">
            <strong>What to Expect:</strong> {extra?.whatToExpect}
          </p>
          <p className="text-pink-600 small">
            <strong>Price:</strong> {extra?.price}
          </p>
        </div>
      ) : (
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          {image && (
            <img
              src={image}
              alt={title}
              style={{
                height: '140px',
                objectFit: 'contain',
                marginBottom: '1rem',
              }}
            />
          )}
          <h5 className="fw-bold mb-2" style={{ color: 'pink' }}>
            {title}
          </h5>
          <p className="text-secondary small px-3">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ClassTypeCard;
