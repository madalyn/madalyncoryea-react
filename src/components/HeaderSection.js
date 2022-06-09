import React, { useState } from "react";
import { Collapse } from "reactstrap";

export default function HeaderSection({ title, children }) {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <div className="d-flex flex-fill justify-content-between mt-4 mb-4">
      <div className="flex-1" onClick={() => setCollapsed(!isCollapsed)}>
        <h1 className="text-end me-4">{title}</h1>
      </div>
      <Collapse isOpen={!isCollapsed} className="flex-3 ms-4">
        {children}
      </Collapse>
    </div>
  );
}
