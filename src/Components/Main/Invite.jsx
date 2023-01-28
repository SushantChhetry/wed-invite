import React from "react";
import Gallery from "./Gallery/Gallery";
import Story from "./Story";
import RSVP from "./RSVP";

const Invite = () => {
  const titleStyle = {
    display: " flex",
    marginTop: "100px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10%",
  };

  return (
    <div>
      <div style={titleStyle}>
        <img src="https://picsum.photos/id/1015/250/150/" alt="invite" />
        <h4>INVITE YOU TO CELEBRATE THEIR WEDDING!</h4>
        <button type="button">RSVP</button>
      </div>
      <Gallery />
      <RSVP />
    </div>
  );
};

export default Invite;
