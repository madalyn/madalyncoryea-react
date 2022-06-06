import react from "react";

export default function InfoCard({ photo, title, text }) {
  return (
    <div className="d-flex flex-row w-100 h-100">
      <div>
        <img width="100px" height="100px" src="lies.png" alt={photo} />
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
