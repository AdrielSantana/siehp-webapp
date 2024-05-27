import { Auth } from "@/modules/user/domain/models";
import { create } from "zustand";

interface AuthStore {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  auth: null,
  setAuth: (auth) => set({ auth }),
}));
