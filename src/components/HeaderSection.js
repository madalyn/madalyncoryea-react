import react from "react";

export default function HeaderSection({ title, children }) {
  return (
    <div className="d-flex flex-fill justify-content-between mt-4 mb-4">
      <div className="flex-1">
        <h1>{title}</h1>
      </div>
      <div className="flex-3">{children}</div>
    </div>
  );
}
