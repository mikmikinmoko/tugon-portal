import { useQuery } from "@tanstack/react-query";
import { getIdStatus } from "../api/services-api";
import { message } from "antd";

export const useGetIdStatus = () => {
  return useQuery({
    queryKey: ["getIdStatus"],
    queryFn: getIdStatus,
    staleTime: 1000 * 60 * 10, // 10 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
    throwOnError: (error) => {
      message.warning(error?.response?.data?.message || error.message);
    },
  });
};
