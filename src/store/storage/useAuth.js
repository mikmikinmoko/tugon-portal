import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCitizenAuthStore = create(
  persist(
    (set) => ({
      userData: null,
      token: null,
      setuserData: (userData) => set({ userData }),
      setToken: (token) => set({ token }),
      reset: () => set({ userData: null, token: null }),
    }),
    {
      name: "citizenAuth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
