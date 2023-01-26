import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";

export class Footer extends Component {
  render() {
    const LinkedInLink = "https://www.google.com/";
    const IconStyle = {
      padding: "10px",
      textDecoration: "none",
    };

    const FooterStyle = {
      position: "relative",
      padding: "10px 10px 0px 10px",
      bottom: 0,
      width: "100%",
      height: "40px",
      background: "grey",
    };

    return (
      <div className="Footer" style={FooterStyle}>
        <span className="LinkedIn" style={IconStyle}>
          <a href={LinkedInLink} target="_new">
            <FaHeart />
          </a>
        </span>
        <span className="Github" style={IconStyle}>
          <a href={LinkedInLink} target="_new">
            <FaHeart />
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
