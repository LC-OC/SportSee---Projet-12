import React from "react";
import { PieChart, Pie } from "recharts";

const PieChartBarScore = ({ score }) => {
  console.log(score);
  let scoreTest = score * 100;
  console.log(scoreTest);
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie data={scoreTest} cx="50%" cy="50%" fill="#FF0101" />
      </PieChart>
    </div>
  );
};

export default PieChartBarScore;
