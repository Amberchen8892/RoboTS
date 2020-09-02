import React from "react";

interface ScrollProps {
  children: JSX.Element;
}

const Scroll: React.FC<ScrollProps> = ({ children }) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
