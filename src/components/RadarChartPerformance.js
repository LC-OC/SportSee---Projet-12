import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Radar,
  PolarRadiusAxis,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Display the BarChart
 * @component
 * @param {array} performance
 * @returns {React.ReactElement}
 */
const RadarChartPerformance = ({ performance }) => {
  /**
   * Display the new days format for the PolarAngleAxis of the Chart
   * @param {number} kind
   * @returns performance with new format (number to string)
   */
  function newPerformanceFormat(kind) {
    if (kind === 1) return "Cardio";
    else if (kind === 2) return "Energie";
    else if (kind === 3) return "Endurance";
    else if (kind === 4) return "Force";
    else if (kind === 5) return "Vitesse";
    else if (kind === 6) return "Intensité";
    return kind;
  }
  return (
    <div className="container_performanceChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={65} data={performance.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFF"
            fontSize="12px"
            tickLine={false}
            axisLine={false}
            tickFormatter={newPerformanceFormat}
            dy={4}
          />
          <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
          <Radar
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarChartPerformance.prototypes = {
  performance: PropTypes.array,
  data: PropTypes.array,
};

export default RadarChartPerformance;
