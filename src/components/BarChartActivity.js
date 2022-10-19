import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResponsiveContainer, BarChart, YAxis } from "recharts";
import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { Tooltip } from "recharts";
import { Legend } from "recharts";
import { Bar } from "recharts";
import { getUserActivity } from "../utils/FetchData";

const BarChartActivity = () => {
  const { id } = useParams();
  const [userActivity, setUserActivity] = useState([]);
  useEffect(() => {
    const fetchUserActivity = async () => {
      const res = await getUserActivity(id);
      setUserActivity(res.data);
    };
    fetchUserActivity();
  }, [id]);
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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userActivity.sessions}
          width={730}
          height={250}
          barGap={8}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
          <Tooltip className="tooltip" content={<CustomToolTip />} />
          <Legend />
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
            legendType={"circle"}
            maxBarSize={8}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartActivity;
