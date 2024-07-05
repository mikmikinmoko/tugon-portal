import { createAxiosInstanceWithInterceptor } from "./axois";

const axiosDefault = createAxiosInstanceWithInterceptor("data", "ADMIN");
const axiosFile = createAxiosInstanceWithInterceptor("dataFile", "ADMIN");

export const createSeniorId = async (body) => {
  const result = await axiosFile.post(
    "/api/citizen/services/senior/createSeniorId",
    body
  );
  return result;
};
