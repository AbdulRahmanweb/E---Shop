import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Async section for fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (limit = 60) => {
	const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
	const data = await response.json();
	return data.products;
	//Returning only products array
});

const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		filteredProducts: [],
		loading: false,
		error: null,
		searchQuery: "",
		category: "all",
		sortOrder: "default"
	},
	reducers: {
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
			state.filteredProducts = action.payload ? 
			state.products.filter((product) => product.title.toLowerCase().includes(action.payload.toLowerCase())) : state.products
		},
		setCategory: (state, action) => {
			state.category = action.payload;
			state.filteredProducts = action.payload === "all" ? state.products : state.products.filter((product) => product.category === action.payload);
		},
		setSortOrder: (state, action) => {
			state.sortOrder = action.payload;
			if (action.payload === "low-high") {
				state.filteredProducts.sort((a, b) => a.price - b.price);
			} else if (action.payload === "high-low") {
				state.filteredProducts.sort((a, b) => b.price - a.price);
			} else {
				state.filteredProducts = [...state.products]; //Reset to default order
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loading = true;
		}).addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false
			state.products = action.payload
			state.filteredProducts = action.payload
		}).addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message;
		});
	}
});

export default productSlice.reducer;
export const {setSearchQuery, setCategory, setSortOrder} = productSlice.actions;