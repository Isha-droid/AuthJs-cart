"use client"
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: "cart", // Slice name
    initialState, // Initial state
    reducers: {
        addToCart(state, action) {
            // Logic to add an item to the cart
            const newItem = action.payload;
            console.log(newItem)
            state.cartItems.push(newItem);
        },
        removeFromCart(state, action) {
            // Logic to remove an item from the cart
            const itemIdToRemove = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
            return state
        }
    }
});

// Extracting action creators and reducer from the slice
export const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducer= cartSlice.reducer
export default cartReducer; // Exporting the reducer function
