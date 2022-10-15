import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart } from "recharts";
import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { Tooltip } from "recharts";
import { Legend } from "recharts";
import { Line } from "recharts";
import { getUserAverageSession } from "../utils/FetchData";

const LineChartSession = () => {
  const { id } = useParams();
  const [userSession, setUserSession] = useState([]);
  useEffect(() => {
    const fetchUserSession = async () => {
      const res = await getUserAverageSession(id);
      setUserSession(res.data);
    };
    fetchUserSession();
  }, [id]);
  console.log(userSession.sessions);
  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={userSession.sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <Tooltip />
        <Legend />
        <Line dataKey="sessionLength" stroke="#E60000" />
      </LineChart>
    </div>
  );
};

export default LineChartSession;
