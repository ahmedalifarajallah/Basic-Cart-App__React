import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/products-slice";
import CartReducer from "./slices/Cart-slice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
  },
});
