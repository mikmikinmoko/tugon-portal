import defaultAxios from "axios";
import { useCitizenAuthStore } from "../storage/useAuth";
import { createAxiosInstanceWithInterceptor } from "./axois";

const axiosDefault = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const createPwdId = async (body) => {
  const result = await axiosDefault.post(
    "/api/citizen/services/pwd/createPwdId",
    body
  );
  return result;
  // try {
  //   const result = await axiosFile.post("createSeniorId", body);
  //   return result;
  // } catch (err) {
  //   return err;
  // }
};
