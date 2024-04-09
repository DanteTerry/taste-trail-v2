import { IMenuItem } from "@/types/types";
import { useSession } from "next-auth/react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TCart = {
  cart: IMenuItem[];
  addToCart: (item: IMenuItem) => void;
  removeFromCart: (item: IMenuItem) => void;
  increaseQuantity: (item: IMenuItem) => void;
  decreaseQuantity: (item: IMenuItem) => void;
};

export const useCartStore = create<TCart>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item: IMenuItem) =>
        set((state) => ({ cart: [...state.cart, item] })),

      removeFromCart: (item: IMenuItem) => {
        set((state) => ({
          cart: state.cart.filter(
            (cartItem: IMenuItem) => cartItem._id !== item._id,
          ),
        }));
      },
      increaseQuantity: (item: IMenuItem) => {
        set((state) => ({
          cart: state.cart.map((cartItem: IMenuItem) => {
            return cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem;
          }),
        }));
      },
      decreaseQuantity: (item: IMenuItem) => {
        set((state) => ({
          cart: state.cart.map((cartItem: IMenuItem) => {
            return cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem;
          }),
        }));
      },
      setCart: (cart: IMenuItem[]) => set({ cart }),
    }),
    {
      name: "cart",
    },
  ),
);
