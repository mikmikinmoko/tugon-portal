import defaultAxios from "axios";
import { getStore } from "../../helpers/injectedStore";

const axios = defaultAxios.create({
  baseURL: import.meta.env.VITE_BASE_URL + `/api/citizen/auth/`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
axios.interceptors.request.use(async function (config) {
  const store = getStore();
  config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
  config.baseURL = `${import.meta.env.VITE_BASE_URL}/api/cms/senior`;
  return config;
});
const axiosFile = defaultAxios.create({
  baseURL: import.meta.env.VITE_BASE_URL + `/api/citizen/senior/services/`,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
axiosFile.interceptors.request.use(async function (config) {
  const store = getStore();
  config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
  config.baseURL = `${
    import.meta.env.VITE_BASE_URL
  }/api/citizen/senior/services/`;
  return config;
});

export const createSeniorId = async (payload) => {
  try {
    const result = await axiosFile.post("createSeniorId", payload);
    return result;
  } catch (err) {
    return;
  }
};
