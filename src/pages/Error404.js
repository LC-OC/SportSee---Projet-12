import React from "react";
import Header from "../components/Header";
import NavLeft from "../components/NavLeft";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Header />
      <NavLeft />
      <div className="content_container">
        <h1>404</h1>
        <p>
          Oups, cette page n'existe pas ! Vous ne vouliez pas plutôt vous rendre
          <Link className="linkError" to="/dashboard/12">
            ici
          </Link>
          ou
          <Link className="linkError" to="/dashboard/18">
            là
          </Link>
          ?
        </p>
      </div>
    </div>
  );
};

export default Error404;
