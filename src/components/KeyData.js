import React from "react";
import caloriesIcon from "../assets/caloriesIcon.svg";
import proteinesIcon from "../assets/proteinesIcon.svg";
import glucidesIcon from "../assets/glucidesIcon.svg";
import fatIcon from "../assets/fatIcon.svg";
import PropTypes from "prop-types";

/**
 * Display the KeyData (calories, proteines, glucides, fat)
 * @component
 * @param {object} keyData
 * @returns {React.ReactElement}
 */

const KeyData = ({ keyData }) => {
  return (
    <div className="keyData_container">
      <div className="calories keyData_element">
        <img src={caloriesIcon} alt="" />
        <div className="keyData_infos">
          <p className="keyData">{keyData.calorieCount}kCal</p>
          <p className="keyData_type">Calories</p>
        </div>
      </div>
      <div className="proteines keyData_element">
        <img src={proteinesIcon} alt="" />
        <div className="keyData_infos ">
          <p className="keyData">{keyData.proteinCount}g</p>
          <p className="keyData_type">Protéines</p>
        </div>
      </div>
      <div className="glucides keyData_element">
        <img src={glucidesIcon} alt="" />
        <div className="keyData_infos">
          <p className="keyData">{keyData.carbohydrateCount}g</p>
          <p className="keyData_type">Glucides</p>
        </div>
      </div>
      <div className="fat keyData_element">
        <img src={fatIcon} alt="" />
        <div className="keyData_infos">
          <p className="keyData">{keyData.lipidCount}g</p>
          <p className="keyData_type">Lipides</p>
        </div>
      </div>
    </div>
  );
};

KeyData.propTypes = {
  keyData: PropTypes.object,
  calorieCount: PropTypes.number,
  proteinCount: PropTypes.number,
  carbohydrateCount: PropTypes.number,
  lipidCount: PropTypes.number,
};

export default KeyData;
