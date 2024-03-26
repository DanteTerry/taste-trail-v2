import { IMenuItem } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IMenuItem[] = [
  {
    name: "",
    image: "",
    price: 0,
    category: "",
    quantity: 1,
    cuisine: "",
    description: "",
    isInCart: false,
    _id: "",
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
