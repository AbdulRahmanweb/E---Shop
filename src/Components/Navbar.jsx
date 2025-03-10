import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../Redux-Rtk/productSlice';
import styles from '../Styles/Navbar.module.css'

const Navbar = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [search, setSearch] = useState("");

	function handleSearch(e) {
		setSearch(e.target.value);
	dispatch(setSearchQuery(e.target.value));
	}

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
			<Link to={'/'}>E-Shop</Link>
			</div>
			<input className={styles.search} type='text' placeholder='Search Products...' 
			value={search} onChange={handleSearch} />
			<div className={styles.cart}>
			<Link to={'/cart'}>Cart <span className={styles.cartCount}>{cartItems.length}
			</span>
			</Link>
			</div>
		</nav>
	);
}

export default Navbar;
