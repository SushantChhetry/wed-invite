import React from "react";

const Nav = () => {
  const btnContainerStyles = {
    display: " flex",
    justifyContent: "spacearound",
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
      <span style={btnStyles}>
        <button type="button">RSVP</button>
      </span>
      <span style={btnStyles}>
        <button type="button">Registry</button>
      </span>
      <span style={btnStyles}>
        <button type="button">Our Story</button>
      </span>
      <span style={btnStyles}>
        <button type="button">Details</button>
      </span>
    </div>
  );
};

export default Nav;
