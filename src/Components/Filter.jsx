import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortOrder } from '../Redux-Rtk/productSlice';
import styles from  '../Styles/Filter.module.css';

const Filters = () => {
	const dispatch = useDispatch();
	const {category, sortOrder} = useSelector((state) => state.products);
	return (
		<div className={styles.filters}>
			<select value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
				<option value="all">All Categories</option>
				<option value="kitchen-accessories">Kitchen-Accessories</option>
				<option value="home-decoration">Home-Decoration</option>
				<option value="fragrances">Fragrances</option>
				<option value="groceries">Groceries</option>
				<option value="beauty">Beauty</option>
			</select>

			<select value={sortOrder} onChange={(e) => dispatch(setSortOrder(e.target.value))}>
			<option value="default">Default</option>
			<option value="low-high">Price: Low to High</option>
			<option value="high-low">Price: High to low</option>
			</select>
		</div>
	);
}

export default Filters;
