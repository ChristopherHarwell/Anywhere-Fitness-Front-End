import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token
    },

    baseURL: "https://anywhere-fitness-3.herokuapp.com/" //TODO add https://anywhere-fitness-3.herokuapp.com/ as the baseURL

  });
};