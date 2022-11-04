import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  YAxis,
  CartesianGrid,
  XAxis,
  Tooltip,
  Bar,
} from "recharts";
import redDot from "../assets/redDot.svg";
import blackDot from "../assets/blackDot.svg";

/**
 * Display the BarChart Activity
 * @component
 * @param {object} activity
 * @returns {React.ReactElement}
 */

const BarChartActivity = ({ activity }) => {
  /**
   *  Custom tooltip BarChart Activity
   * @param {boolean} active
   * @param {array} payload
   * @returns custom tooltip with kg and kcal
   */
  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom_tooltip">
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      );
    }
  };

  return (
    <div className="activity-container">
      <div className="title_legend">
        <h2>Activité quotidienne</h2>
        <p>
          <img src={blackDot} alt="" />
          Poids (kg)
        </p>
        <p>
          <img src={redDot} alt="" />
          Calories brûlées (kCal)
        </p>
      </div>

      <ResponsiveContainer width="100%" height="70%">
        <BarChart
          data={activity.sessions}
          barGap={8}
          barSize={7}
          fill="#FBFBFB"
          margin={{ left: 50 }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <YAxis
            orientation="right"
            dataKey="kilogram"
            yAxisId="kilogram"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            domain={["dataMin-1", "dataMax+2"]}
            allowDecimals={false}
          />

          <YAxis dataKey="calories" hide={true} />
          <XAxis
            domain={["minData", "maxData"]}
            tickFormatter={(number) => number + 1}
            tickLine={false}
          />
          <Tooltip
            className="tooltip"
            content={<CustomToolTip />}
            wrapperStyle={{ outline: "none" }}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (Kg)"
            legendType={"circle"}
            maxBarSize={8}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (Kcal)"
            maxBarSize={8}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

BarChartActivity.propTypes = {
  activity: PropTypes.object,
  sessions: PropTypes.array,
};

export default BarChartActivity;
