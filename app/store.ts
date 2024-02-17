import { create } from "zustand";

export type Store = {
  page: string;
  setPage: (page: string) => void;
  search: string;
  setSearch: (search: string) => void;
};

const useStore = create<Store>((set) => ({
  page: "home",
  setPage: (newPage: string) => set(() => ({ page: newPage })),
  search: "",
  setSearch: (newSearch: string) => set(() => ({ search: newSearch })),
}));

export default useStore;
