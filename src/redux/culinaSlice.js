import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  filteredRecipe: [],
};

export const culinaSlice = createSlice({
  name: "culinashare",
  initialState,
  reducers: {
    addToFave: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetFave: (state) => {
      state.products = [];
    },


  },
});

export const { addToFave, deleteItem, resetFave } = culinaSlice.actions;
export default culinaSlice.reducer;
