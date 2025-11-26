// app/store/userStore.ts
import { create } from "zustand";

type User = {
  name: string;
  age: number;
  email: string;
  tags: string[];
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
