// cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/types";

interface CartState {
  active: boolean;
  quantity: number;
  quantityHeader: number;
  showcart: boolean;
  cart: Product[];
}

const initialState: CartState = {
  active: false,
  cart: [],
  quantity: 1,
  quantityHeader: 0,
  showcart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setShowCart: (state, action: PayloadAction<boolean>) => {
      state.showcart = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
      state.quantityHeader++;
    },
    setQuantityHeader: (state, action: PayloadAction<number>) => {
      state.quantityHeader = action.payload;
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.quantityHeader--;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ index: number; quantity: number }>
    ) => {
      const { index, quantity } = action.payload;
      state.cart = state.cart.map((product, idx) => {
        if (idx === index) {
          return { ...product, quantity };
        }
        return product;
      });
    },
  },
});

export const {
  setActive,
  setQuantity,
  setShowCart,
  addProduct,
  removeProduct,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
