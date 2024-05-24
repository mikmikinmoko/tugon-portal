import { useQuery } from "@tanstack/react-query";
import { getIdStatus } from "../api/services-api";
import { message } from "antd";

export const useGetIdStatus = () => {
  return useQuery({
    queryKey: ["getIdStatus"],
    queryFn: getIdStatus,
    throwOnError: (error) => {
      message.warning(error?.response?.data?.message || error.message);
    },
    refetchOnWindowFocus: false,
  });
};
