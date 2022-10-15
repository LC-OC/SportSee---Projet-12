import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import Error404 from "../pages/Error404";
import { getUserMainData } from "../utils/FetchData";
import Header from "../components/Header";
import HelloUser from "../components/HelloUser";
import KeyData from "../components/KeyData";
import BarChartActivity from "../components/BarChartActivity";
import LineChartSession from "../components/LineChartSession";
import RadarChartActivity from "../components/RadarChartActivity";
import PieChartBarScore from "../components/PieChartBarScore";

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUserMainData = async () => {
      const res = await getUserMainData(id);
      setUserData(res.data);
    };
    fetchUserMainData();
  }, [id]);
  return (
    <div>
      <Header />
      <HelloUser infosUser={userData?.userInfos} />
      <KeyData keyData={userData.keyData} />
      <BarChartActivity />
      <LineChartSession />
      <RadarChartActivity />
      <PieChartBarScore score={userData?.score} />
    </div>
  );
};

export default Dashboard;
