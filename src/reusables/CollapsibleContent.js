import React, { useState } from "react";
import { Collapse } from "reactstrap";

export default function CollapsibleContent({ header, children }) {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div>
      <div onClick={() => setCollapsed(!isCollapsed)}>
        <div>{header}</div>
      </div>
      <Collapse isOpen={!isCollapsed}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
}
