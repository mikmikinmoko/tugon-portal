import { useMutation, useQuery } from "@tanstack/react-query";
import { getMunicipalities, signupCitizenApi } from "../api/auth-api";
import { createSeniorId } from "../api/senior-api";
import { message } from "antd";
import { createPwdId } from "../api/pwd-api";

export const useSignupCitizenApi = () => {
  return useMutation({
    mutationFn: signupCitizenApi,
  });
};

export const useCreateSeniorId = () => {
  return useMutation({
    mutationFn: createSeniorId,
  });
};
export const useCreatePwdId = () => {
  return useMutation({
    mutationFn: createPwdId,
  });
};

export const useGetMunicipalities = () => {
  return useQuery({
    queryKey: ["getMunicipalitiesKey"],
    queryFn: getMunicipalities,
    initialData: [],
    throwOnError: (error) => {
      message.warning(error?.response?.data?.message || error?.message);
    },
    refetchOnWindowFocus: false,
  });
};
