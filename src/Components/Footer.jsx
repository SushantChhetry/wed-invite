import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";

export class Footer extends Component {
  render() {
    const LinkedInLink = "https://www.google.com/";
    const FooterStyle = {
      background: "green",
      height: "100px",
      padding: "30px",
    };

    return (
      <div>
        <footer style={FooterStyle}>Sticky footer</footer>
      </div>
    );
  }
}

export default Footer;
