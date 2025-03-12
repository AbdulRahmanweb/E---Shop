import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import cartReducer from './cart.Slice';
import themeReducer from './themeSlice';

const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
		theme: themeReducer
	}
});

export default store;