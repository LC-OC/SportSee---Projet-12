import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUserMainData,
  getUserPeformance,
  getUserAverageSession,
  getUserActivity,
} from "../services/FetchData";
import Header from "../components/Header";
import NavLeft from "../components/NavLeft";
import HelloUser from "../components/HelloUser";
import KeyData from "../components/KeyData";
import BarChartActivity from "../components/BarChartActivity";
import LineChartSession from "../components/LineChartSession";
import RadarChartPerformance from "../components/RadarChartPerformance";
import PieChartScore from "../components/PieChartScore";
import Error404 from "./Error404";
import PropTypes from "prop-types";

/**
 * Display dashboard user
 * @component
 * @returns {React.ReactElement}
 */

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [userSession, setUserSession] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  useEffect(() => {
    const fetchUserMainData = async () => {
      const res = await getUserMainData(id);
      setUserData(res.data);
    };
    const fetchUserPerformance = async () => {
      const res = await getUserPeformance(id);
      setUserPerformance(res.data);
    };
    const fetchUserSession = async () => {
      const res = await getUserAverageSession(id);
      setUserSession(res.data);
    };
    const fetchUserActivity = async () => {
      const res = await getUserActivity(id);
      setUserActivity(res.data);
    };
    fetchUserMainData();
    fetchUserPerformance();
    fetchUserSession();
    fetchUserActivity();
  }, [id]);

  // Error 404 if wrong id in url mocked data
  if ((+id !== 12) & (+id !== 18)) {
    return <Error404 />;
  }
  // Error 404 if wrong id in url api
  if (userData.length === 0) {
    return <Error404 />;
  }
  return (
    <div className="body">
      <Header />
      <NavLeft />
      <div className="containt_container">
        <HelloUser infosUser={userData?.userInfos} />
        <div className="elements_container">
          <div className="charts_container">
            <BarChartActivity activity={userActivity} />
            <div className="three_charts_container">
              <LineChartSession session={userSession} />
              <RadarChartPerformance performance={userPerformance} />
              <PieChartScore scoreData={userData} />
            </div>
          </div>
          <KeyData keyData={userData.keyData} />
        </div>
      </div>
    </div>
  );
};

Dashboard.prototypes = {
  userData: PropTypes.object,
};

export default Dashboard;
