import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../types/types";

const initialState: ProductState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
