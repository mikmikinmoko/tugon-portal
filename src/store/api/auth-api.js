import defaultAxios from "axios";
import { getStore } from "../../helpers/injectedStore";
import { createAxiosInstanceWithInterceptor } from "./axois";

const axiosDefault = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const login = async (body) => {
  const result = await axiosDefault.post("/api/citizen/auth/login", body);
  return result;
};

export const getMunicipalities = async () => {
  return await axiosDefault.get("/api/citizen/auth/fetchMunicipalities");
};

export const signupCitizenApi = async ({ body }) => {
  return await axiosDefault.post("/api/citizen/auth/signupCitizen", body);
};

// export const changePasswordWithToken = async (payload) => {
//   try {
//     const store = getStore();
//     const result = await axios.post("changePasswordWithToken", payload.body, {
//       headers: { Authorization: `Bearer ${store.getState().auth.token}` },
//     });
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

// export const sendOtp = async (body) => {
//   try {
//     const result = await axios.post("sendOtp", body);
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

// export const submitOtp = async (body) => {
//   try {
//     const result = await axios.post("submitOtp", body);
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

// export const changePassword = async (body) => {
//   try {
//     const result = await axios.post("changePassword", body);
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

// export const changePasswordAthenticated = async (payload) => {
//   try {
//     const store = getStore();
//     const result = await axios.post(
//       "changePasswordAthenticated",
//       payload.body,
//       {
//         headers: { Authorization: `Bearer ${store.getState().auth.token}` },
//       }
//     );
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
