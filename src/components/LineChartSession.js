import React from "react";
import {
  LineChart,
  YAxis,
  CartesianGrid,
  XAxis,
  Tooltip,
  Line,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const LineChartSession = ({ session }) => {
  function newDayFormat(day) {
    if (day === 1) return "L";
    else if (day === 2) return "M";
    else if (day === 3) return "M";
    else if (day === 4) return "J";
    else if (day === 5) return "V";
    else if (day === 6) return "S";
    else if (day === 7) return "D";
    return day;
  }
  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom_tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  };
  //test custom cursor
  const CustomCursor = ({ points }) => {
    return (
      <Rectangle
        x={points[0].x}
        height={300}
        width={300}
        fill="#000000"
        opacity={0.2}
      />
    );
  };
  return (
    <div className="lineChart">
      <h2 className="titleSessionChart">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={session.sessions}>
          <CartesianGrid
            stroke="transparent"
            horizontal={false}
            vertical={false}
          />
          <YAxis hide={true} domain={["dataMin-25", "dataMax+40"]} />
          <XAxis
            dataKey="day"
            tickFormatter={newDayFormat}
            padding={{ left: 8, right: 8 }}
            axisLine={false}
            tickLine={false}
            stroke="white"
          />
          <Tooltip
            content={<CustomToolTip />}
            cursor={<CustomCursor />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            dataKey="sessionLength"
            stroke="white"
            type="natural"
            dot={false}
            strokeWidth={2}
            tickMargin={40}
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              fill: "white",
              strokeWidth: 15,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineChartSession.prototypes = {
  session: PropTypes.array,
  sessions: PropTypes.array,
};

export default LineChartSession;
