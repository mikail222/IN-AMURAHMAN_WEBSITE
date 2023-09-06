import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addProduct: [],
};
const productReducer = createSlice({
  name: "addProducts",
  initialState,
  reducers: {
    productData(state, action) {
      const newProduct = action.payload;
      state.addProduct.push(newProduct);
    },

    deleteData(state, action) {
      const checkPersonsName = state.addBlog.find(
        (person) => person.id === action.payload
      );

      state.addBlog = state.addBlog.filter((u) => u.id !== action.payload);
    },
    retainUserData(state, action) {
      const checkPersonsName = state.addBlog.find(
        (person) => person.id === action.payload
      );

      state.addBlog = state.addBlog.filter((u) => u.id === action.payload);
    },
  },
});
export const { productData, deleteData, retainUserData } =
  productReducer.actions;
export default productReducer.reducer;
