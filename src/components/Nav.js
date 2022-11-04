import React from "react";

/**
 * Display the navbar
 * @component
 * @returns {React.ReactElement}
 */

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-content">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default Nav;
