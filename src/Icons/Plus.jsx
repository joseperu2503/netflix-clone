import * as React from "react";

function PlusIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      className="Hawkins-Icon Hawkins-Icon-Standard"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default PlusIcon;
