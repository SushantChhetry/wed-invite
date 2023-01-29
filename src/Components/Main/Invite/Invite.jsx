import React from "react";
import Gallery from "../Gallery/Gallery";
import RSVP from "../RSVP/RSVP";
import "./Invite.css";

const Invite = () => {
  return (
    <div>
      <div className="titleStyle">
        <h4>Let's celebrate</h4>
        <h1>Matt & Katie</h1>
        <h4>On 24 February 2024</h4>
        <button className="btn" type="button">
          RSVP
        </button>
      </div>
      <Gallery />
      <RSVP />
    </div>
  );
};

export default Invite;
