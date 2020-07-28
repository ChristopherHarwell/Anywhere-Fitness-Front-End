import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: "http://localhost:8000" //TODO add https://anywhere-fitness-3.herokuapp.com/ as the baseURL
  });
};