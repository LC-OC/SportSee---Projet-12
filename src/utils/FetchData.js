import axios from "axios";

export const getUserMainData = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserActivity = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserAverageSession = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPeformance = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}performance`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
