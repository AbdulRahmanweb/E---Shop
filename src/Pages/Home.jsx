import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux-Rtk/productSlice';
import Filters from '../Components/Filter';
import { Link } from 'react-router-dom';
import styles from '../Styles/Home.module.css';

const Home = () => {
	const dispatch = useDispatch();
	const {filteredProducts, loading, error, } = useSelector((state) => state.products);

	const darkmode = useSelector((state) => state.theme.darkmode);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	return (<div>
		<Filters />
		<div className={styles.productList}>
			{filteredProducts.map((product) => (
				<Link className={`${styles.productCard} ${darkmode ? styles.dark : ""}`} to={`/product/${product.id}`} key={product.id}>
					<img src={product.thumbnail} alt={product.title} />
					<h3>{product.title}</h3>
					<p className={styles.price}><strong>Price</strong> ${product.price}</p>
					<p className={styles.brand}><strong>Brand: </strong>{product.brand}</p>
					<p className={styles.category}><strong>Category:</strong> {product.category}</p>
					</Link>
				))}
				</div>
				</div>
				);
			}

export default Home;


