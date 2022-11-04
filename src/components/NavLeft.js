import React from "react";
import bikeIcon from "../assets/bikeIcon.svg";
import natationIcon from "../assets/natationIcon.svg";
import haltereIcon from "../assets/haltereIcon.svg";
import yogaIcon from "../assets/yogaIcon.svg";

/**
 * Display the sidebar on the left
 * @component
 * @returns {React.ReactElement}
 */

const NavLeft = () => {
  return (
    <div className="nav-left">
      <div className="icons-nav">
        <img src={yogaIcon} alt="" />
        <img src={natationIcon} alt="" />
        <img src={bikeIcon} alt="" />
        <img src={haltereIcon} alt="" />
      </div>
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  );
};

export default NavLeft;
