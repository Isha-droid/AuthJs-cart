"use client"
import cartReducer from "./slices/cart-slice";
const { configureStore } = require("@reduxjs/toolkit");
const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})
export default store;