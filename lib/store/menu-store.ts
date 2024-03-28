import { IMenuItem } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TMenu = {
  menu: IMenuItem[];
  setMenu: (item: IMenuItem[]) => void;
  changeMenu: (item: IMenuItem) => void;
};

export const useMenuStore = create<TMenu>()(
  persist(
    (set) => ({
      menu: [],
      setMenu: (item) => set({ menu: item }),
      changeMenu: (item) =>
        set((state) => ({
          menu: state.menu.map((menuItem) =>
            menuItem._id === item._id ? item : menuItem,
          ),
        })),
    }),
    {
      name: "menu",
    },
  ),
);
