import { createAxiosInstanceWithInterceptor } from "./axois";

const axiosDefault = createAxiosInstanceWithInterceptor("data", "ADMIN");
const axiosFile = createAxiosInstanceWithInterceptor("dataFile", "ADMIN");

export const getIdStatus = async () => {
  const result = await axiosDefault.get("/api/citizen/services/getIdStatus");
  return result;
};
