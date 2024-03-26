import { Store, configureStore } from "@reduxjs/toolkit";

import menuReducer from "@/utils/redux/slices/menuSlice";
import cartReducer from "@/utils/redux/slices/cartSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<Store["getState"]>;
