import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const store = create(
  persist(
    (set) => ({
      language: "En",
      setLanguage: (newLanguage) => set({ language: newLanguage }),
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "lode-x-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default store;
