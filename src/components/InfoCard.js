import react from "react";

export default function InfoCard({ photo, title, text, photoSub = null }) {
  return (
    <div className="d-flex flex-row w-100 h-100 mb-3">
      <div className="me-3">
        {photoSub ? (
          photoSub
        ) : (
          <img width="100px" height="100px" src={photo} alt={photo} />
        )}
      </div>
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
