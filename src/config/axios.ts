import axios from "axios";
/* const baseURL = "https://pwa-back-production.up.railway.app/api"; */
const baseURL = "http://localhost:3000/api";
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
