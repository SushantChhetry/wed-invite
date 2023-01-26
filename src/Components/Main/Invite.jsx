import React from "react";
import Gallery from "./Gallery/Gallery";
import Story from "./Story";
import RSVP from "./RSVP";

const Invite = () => {
  const titleStyle = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "green",
    display: " flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <div style={titleStyle}>
        <img src="https://picsum.photos/id/1015/250/150/" alt="invite" />
        <h1> X WEDS Y</h1>
        <button type="button">Click Me</button>
      </div>
      <Gallery />
      <RSVP />
    </div>
  );
};

export default Invite;
