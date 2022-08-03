import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    deleteFromCart: (state, action) => {
      console.log("Delete from cart");
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
