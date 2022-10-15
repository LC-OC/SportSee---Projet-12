import React from "react";
//import Error404 from "../pages/Error404";

const HelloUser = ({ infosUser }) => {
  return (
    <div className="hello_user">
      <h1>
        Bonjour <span className="name_user">{infosUser?.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default HelloUser;
