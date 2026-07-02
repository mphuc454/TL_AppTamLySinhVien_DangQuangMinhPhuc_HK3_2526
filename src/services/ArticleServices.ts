import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.10:3000/api",
});

export const getArticles = async () => {
  const response = await API.get("/articles");
  return response.data;
};
