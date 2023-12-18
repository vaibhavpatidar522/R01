import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";

const reducer = {
    cart : cartSlice
}

const store = configureStore({reducer})


export default store