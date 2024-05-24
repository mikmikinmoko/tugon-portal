import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth-api";
import { useCitizenAuthStore } from "../storage/useAuth";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export const useLoginApi = () => {
  const navigate = useNavigate();
  const { setuserData, setToken } = useCitizenAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      setuserData(data.data);
      setToken(data.token);
      navigate("/", { replace: true });
    },
    throwOnError: (error) => {
      message.warning(error?.response?.data?.message || error?.message);
    },
  });
};
