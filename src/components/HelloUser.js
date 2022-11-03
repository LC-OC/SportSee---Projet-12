import React from "react";
import PropTypes from "prop-types";

const HelloUser = ({ infosUser }) => {
  return (
    <div className="hello_user">
      <h1>
        Bonjour <span className="name_user">{infosUser.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

HelloUser.propTypes = {
  infosUser: PropTypes.object,
  firstName: PropTypes.string,
};
export default HelloUser;
