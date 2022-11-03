import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const PieChartScore = ({ scoreData }) => {
  const score = scoreData.score || scoreData.todayScore;
  const scorePourcentage = [
    {
      name: "completed",
      value: score * 100,
      fillColor: `red`,
    },
    {
      name: "remain",
      value: 100 - score * 100,
      fillColor: `white`,
    },
  ];
  const pourcentageLegend = score * 100;
  return (
    <div className="score_container">
      <h2>Score</h2>
      <div className="legend_score">
        <p className="pourcentage">{pourcentageLegend + "%"}</p>
        <p>de votre objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie
            data={scorePourcentage}
            dataKey="value"
            fill="#FF0000"
            innerRadius={68}
            outerRadius={80}
            startAngle={80}
            endAngle={480}
          >
            {scorePourcentage.map((scoreCompleted, index) => (
              <Cell
                key={`cell-${index}`}
                fill={scoreCompleted.fillColor}
                cornerRadius="50%"
              ></Cell>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

PieChartScore.propTypes = {
  scoreData: PropTypes.object,
  score: PropTypes.number,
  todayScore: PropTypes.number,
};

export default PieChartScore;
