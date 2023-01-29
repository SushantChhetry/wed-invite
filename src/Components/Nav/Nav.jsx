import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="btnContainerStyles">
      <span className="btnStyles">
        <button className="btn" type="button">
          RSVP
        </button>
      </span>
      <span className="btnStyles">
        <button className="btn" type="button">
          Registry
        </button>
      </span>
      <span className="btnStyles">
        <button className="btn" type="button">
          Our Story
        </button>
      </span>
      <span className="btnStyles">
        <button className="btn" type="button">
          Details
        </button>
      </span>
      <h3 className="titleStyles">Matt & Katie</h3>
    </div>
  );
};

export default Nav;
