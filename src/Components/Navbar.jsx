import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../Redux-Rtk/productSlice';
import { toggleTheme } from '../Redux-Rtk/themeSlice';
import styles from '../Styles/Navbar.module.css'

const Navbar = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [search, setSearch] = useState("");

	const darkmode = useSelector((state) => state.theme.darkmode);

	function handleSearch(e) {
		setSearch(e.target.value);
	dispatch(setSearchQuery(e.target.value));
	}

	return (
		<nav className={`${styles.navbar} ${darkmode ? styles.dark : ""}`}>
			<div className={`${styles.logo} ${darkmode ? styles.dark : ""}`}>
			<Link to={'/'}>Store</Link>
			</div>
			<input className={`${styles.search} ${darkmode ? styles.dark : ""}`} type='text' placeholder='Search Products...' 
			value={search} onChange={handleSearch} />
			<div className={styles.cart}>
			<Link to={'/cart'}>Cart <span className={styles.cartCount}>{cartItems.length}
			</span>
			</Link>
			<button className={styles.toggleTheme} onClick={() => dispatch(toggleTheme())}>{darkmode ? "Light Mode" : "Dark Mode"}</button>
			</div>
		</nav>
	);
}

export default Navbar;
