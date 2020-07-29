import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token"); // TODO figure out why token isn't saving to local storage
  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: "http://localhost:8000/api" //TODO add https://anywhere-fitness-3.herokuapp.com/ as the baseURL
  });
};