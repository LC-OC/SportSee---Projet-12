import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";

// For mocked data => mockData = true;
// For API => mockData = false;
let mockData = true;

/**
 * Fetch mocked data and API
 * @async
 * @param {number} id
 * @returns {res}
 */

export const getUserMainData = async (id) => {
  if (mockData) {
    console.log("mock");
    try {
      const res = USER_MAIN_DATA.filter((data) => data.id === +id);
      console.log(id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Il y a une erreur, impossible de mocker les données");
    }
  } else {
    console.log("API");
    try {
      const res = await axios.get(`http://localhost:3000/user/${id}`);
      return res.data;
    } catch (error) {
      console.log("Il y a une erreur, impossible de récupérer l'API");
    }
  }
};

export const getUserActivity = async (id) => {
  if (mockData) {
    try {
      const res = USER_ACTIVITY.filter((data) => data.userId === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Il y a une erreur, impossible de mocker les données");
    }
  } else {
    console.log("API");
    try {
      const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
      return res.data;
    } catch (error) {
      console.log("Il y a une erreur, impossible de récupérer l'API");
    }
  }
};

export const getUserAverageSession = async (id) => {
  if (mockData) {
    console.log("mock");
    try {
      const res = USER_AVERAGE_SESSIONS.filter((data) => data.userId === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Il y a une erreur, impossible de mocker les données");
    }
  } else {
    console.log("API");
    try {
      const res = await axios.get(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      return res.data;
    } catch (error) {
      console.log("Il y a une erreur, impossible de récupérer l'API");
    }
  }
};

export const getUserPeformance = async (id) => {
  if (mockData) {
    console.log("mock");
    try {
      const res = USER_PERFORMANCE.filter((data) => data.userId === +id);
      return {
        data: res[0],
      };
    } catch (error) {
      console.log("Il y a une erreur, impossible de mocker les données");
    }
  } else {
    console.log("API");
    try {
      const res = await axios.get(
        `http://localhost:3000/user/${id}/performance`
      );
      return res.data;
    } catch (error) {
      console.log("Il y a une erreur, impossible de récupérer l'API");
    }
  }
};
