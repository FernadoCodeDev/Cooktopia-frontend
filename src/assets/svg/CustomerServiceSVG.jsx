import React from "react";
const CustomerService = (props) => {
  return (
    <svg
    viewBox="0 0 24 24"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:1.91px;}"
          }
        </style>
      </defs>
      <path
        className="cls-1"
        d="M22.5,18.77l-2.88,2.88c-2,2-8.18.46-12.95-4.32S.36,6.37,2.35,4.38L5.23,1.5l5,5L7.75,9.06c-1,1-.59,3,1.79,5.4s4.41,2.79,5.4,1.79l2.52-2.51Z"
      />
      <polyline
        className="cls-1"
        points="12.96 3.41 16.77 3.41 16.77 6.27 13.91 6.27 13.91 9.14 17.73 9.14"
      />
      <polyline
        className="cls-1"
        points="22.5 2.46 22.5 6.27 19.64 6.27 19.64 2.46"
      />
      <line className="cls-1" x1={22.5} y1={10.09} x2={22.5} y2={6.27} />
    </g>
  </svg>
  );
};

export default CustomerService;
