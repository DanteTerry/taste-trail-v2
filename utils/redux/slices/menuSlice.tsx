import { IMenuItem } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IMenuItem[] = [
  {
    name: "",
    image: "",
    price: 0,
    category: "Main Course",
    quantity: 1,
    cuisine: "",
    description: "",
    isInCart: false,
    _id: "",
  },
];

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,

  reducers: {
    setMenu: (state, action: PayloadAction<IMenuItem[]>) => {
      return action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
