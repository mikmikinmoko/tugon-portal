import defaultAxios from "axios";
import { useCitizenAuthStore } from "../storage/useAuth";

const axios = defaultAxios.create({
  baseURL: import.meta.env.VITE_BASE_URL + `/api/citizen/services/`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
axios.interceptors.request.use(async function (config) {
  const { token } = useCitizenAuthStore.getState();

  config.headers.Authorization = `Bearer ${token}`;
  config.baseURL = import.meta.env.VITE_BASE_URL + `/api/citizen/services/`;
  return config;
});
const axiosFile = defaultAxios.create({
  baseURL: import.meta.env.VITE_BASE_URL + `/api/citizen/services/`,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
axiosFile.interceptors.request.use(async function (config) {
  const { token } = useCitizenAuthStore.getState();
  config.headers.Authorization = `Bearer ${token}`;
  config.baseURL = import.meta.env.VITE_BASE_URL + `/api/citizen/services/`;
  return config;
});

export const getIdStatus = async () => {
  const result = await axios.get("getIdStatus");
  return result;
};
