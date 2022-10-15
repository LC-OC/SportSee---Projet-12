import React from "react";
import caloriesIcon from "../assets/caloriesIcon.svg";
import proteinesIcon from "../assets/proteinesIcon.svg";
import glucidesIcon from "../assets/glucidesIcon.svg";
import fatIcon from "../assets/fatIcon.svg";

const KeyData = ({ keyData }) => {
  return (
    <div className="keyData_container">
      <div className="calories">
        <img src={caloriesIcon} alt="" />
        <div className="keyData_infos">
          <p>{keyData?.calorieCount}kCal</p>
          <p>Calories</p>
        </div>
      </div>
      <div className="proteines">
        <img src={proteinesIcon} alt="" />
        <div className="keyData_infos">
          <p>{keyData?.proteinCount}g</p>
          <p>Protéines</p>
        </div>
      </div>
      <div className="glucides">
        <img src={glucidesIcon} alt="" />
        <div className="keyData_infos">
          <p>{keyData?.carbohydrateCount}g</p>
          <p>Glucides</p>
        </div>
      </div>
      <div className="fat">
        <img src={fatIcon} alt="" />
        <div className="key_data_infos">
          <p>{keyData?.lipidCount}g</p>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default KeyData;
