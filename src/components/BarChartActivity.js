import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarChart } from "recharts";
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
    <div>
      <BarChart width={730} height={250} data={userActivity.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <Tooltip content={<CustomToolTip />} />
        <Legend />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          name="Poids"
          legendType={"circle"}
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          name="Calories brûlées"
          legendType={"circle"}
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default BarChartActivity;
