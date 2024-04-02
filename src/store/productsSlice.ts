import { createSlice } from "@reduxjs/toolkit";

type State = {
  items: string[];
};

const initialState: State = {
  items: ["Sneakers", "Books", "Cars"],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const newProducts = [...state.items, newProduct];
      state.items = [...newProducts];
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
