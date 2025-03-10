import { createSlice } from "@reduxjs/toolkit";

//Load cart from local storage
function getCartFromStorage() {
	const cartData = localStorage.getItem("cart");
	return cartData ? JSON.parse(cartData) : []; //Return is cartdata else empty array
}

//Save cart to local storage
function saveCartToStorage(cart) {
	localStorage.setItem("cart", JSON.stringify(cart));
}

//CartSlice
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: getCartFromStorage(),
	},
	reducers: {
		addToCart: (state, action) => {
			const item = state.cartItems.find((i) => i.id === action.payload.id);
			if (item) {
				item.quantity += 1;
			} else {
				state.cartItems.push({...action.payload, quantity: 1});
			}
			saveCartToStorage(state.cartItems);
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
			saveCartToStorage(state.cartItems)
		},
		increaseQuantity: (state, action) => {
			const item = state.cartItems.find((i) => i.id === action.payload);
			if (item) item.quantity += 1;
			saveCartToStorage(state.cartItems);
		},
		decreaseQuantity: (state, action) => {
			const item = state.cartItems.find((i) => i.id === action.payload);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
			} else {
				state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
			}
			saveCartToStorage(state.cartItems);
		},
		clearCart: (state) => {
			state.cartItems = [];
			saveCartToStorage(state.cartItems);
		}
	}
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;