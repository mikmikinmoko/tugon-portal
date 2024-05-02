import defaultAxios from "axios";
import { getStore } from "../../helpers/injectedStore";

const axios = defaultAxios.create({
  baseURL: import.meta.env.VITE_BASE_URL + `/api/citizen/auth/`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const login = async (body) => {
  try {
    const result = await axios.post("login", body);
    return result;
  } catch (err) {
    return err;
  }
};

export const brgyLogin = async (body) => {
  try {
    const result = await axios.post("brgyLogin", body);
    return result;
  } catch (err) {
    return err;
  }
};

export const getMunicipalities = async () => {
  try {
    const result = await axios.get("fetchMunicipalities");
    return result;
  } catch (err) {
    return err;
  }
};

export const changePasswordWithToken = async (payload) => {
  try {
    const store = getStore();
    const result = await axios.post("changePasswordWithToken", payload.body, {
      headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    });
    return result;
  } catch (err) {
    return err;
  }
};

export const sendOtp = async (body) => {
  try {
    const result = await axios.post("sendOtp", body);
    return result;
  } catch (err) {
    return err;
  }
};

export const submitOtp = async (body) => {
  try {
    const result = await axios.post("submitOtp", body);
    return result;
  } catch (err) {
    return err;
  }
};

export const changePassword = async (body) => {
  try {
    const result = await axios.post("changePassword", body);
    return result;
  } catch (err) {
    return err;
  }
};

export const changePasswordAthenticated = async (payload) => {
  try {
    const store = getStore();
    const result = await axios.post(
      "changePasswordAthenticated",
      payload.body,
      {
        headers: { Authorization: `Bearer ${store.getState().auth.token}` },
      }
    );
    return result;
  } catch (err) {
    return err;
  }
};
