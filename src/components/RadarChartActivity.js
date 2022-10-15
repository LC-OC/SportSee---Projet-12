import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { getUserActivity } from "../utils/FetchData";

const RadarChartActivity = () => {
  const { id } = useParams();
  const [userActivity, setUserActivity] = useState([]);
  useEffect(() => {
    const fetchUserActivity = async () => {
      const res = await getUserActivity(id);
      setUserActivity(res.data);
    };
    fetchUserActivity();
  }, [id]);
  return (
    <div>
      <RadarChart
        outerRadius={90}
        width={730}
        height={250}
        data={userActivity.sessions}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default RadarChartActivity;
