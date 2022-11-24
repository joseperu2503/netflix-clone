import * as React from "react";

function CloseIcon(props) {
  return (
    <svg
      className="svg-icon svg-icon-thin-x svg-closed"
      focusable="true"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z" />
    </svg>
  );
}

export default CloseIcon;
