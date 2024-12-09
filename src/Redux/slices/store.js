import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from ".redux/slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})