import React from "react";

const Nav = () => {
  const btnContainerStyles = {
    display: " flex",
    justifyContent: "center",
    alignItems: "center",
    margin: " 0 0 10px 10px",
  };
  const btnStyles = {
    padding: "1%",
    margin: "5px",
    background: "red",
  };
  return (
    <div style={btnContainerStyles}>
      <span style={btnStyles}>RSVP</span>
      <span style={btnStyles}>
        <a
          className="Registry"
          href="https://www.amazon.com/wedding/search?nameOrEmail=Sushant%20Chhetry"
          target="_new"
        >
          Registry
        </a>
      </span>
      <span style={btnStyles}>Details</span>
      <span style={btnStyles}>Contact</span>
    </div>
  );
};

export default Nav;
