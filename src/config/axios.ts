import axios from "axios";
const baseURL = "https://pwa-back-production.up.railway.app/api/todos";
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
