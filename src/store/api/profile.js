import { createAxiosInstanceWithInterceptor } from "./axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getProfile = async () => {
  return await defaultAxios.get("/api/citizen/profile/getProfile");
};
export const updatePassword = async (body) => {
  return await defaultAxios.post("/api/citizen/profile/updatePassword", body);
};
export const updateProfile = async (body) => {
  return await defaultAxios.post("/api/citizen/profile/updateProfile", body);
};

