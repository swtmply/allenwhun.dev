import React from "react";

const FacebookIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 54"
    >
      <path d="M26 1.04004C12.2148 1.04004 1.03998 12.2148 1.03998 26C1.03998 39.7852 12.2148 50.96 26 50.96C39.7852 50.96 50.96 39.7852 50.96 26C50.96 12.2148 39.7852 1.04004 26 1.04004ZM31.9124 18.2884H28.1606C27.716 18.2884 27.222 18.8734 27.222 19.6508V22.36H31.915L31.2052 26.2236H27.222V37.8222H22.7942V26.2236H18.7772V22.36H22.7942V20.0876C22.7942 16.8272 25.0562 14.1778 28.1606 14.1778H31.9124V18.2884Z" />
    </svg>
  );
};

export default FacebookIcon;
