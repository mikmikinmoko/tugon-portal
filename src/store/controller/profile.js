import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProfile,
  getProfileAccountId,
  updatePassword,
  updateProfile,
} from "../api/profile";
import { useCitizenAuthStore } from "../storage/useAuth";

export const useGetProfile = () => {
  const { userData } = useCitizenAuthStore();
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
    enabled: !!userData,
    staleTime: 1000 * 60 * 10, // 10 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword,
  });
};
export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: updateProfile,
  });
};
