import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";

const store = configureStore({
    reducer: {
        cart: cartReducer, 
    },
  });


export const dispatch = store.dispatch;
export default store;

