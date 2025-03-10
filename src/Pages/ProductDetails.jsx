import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Redux-Rtk/cart.Slice';
import styles from '../Styles/ProductDetails.module.css';

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.products.filteredProducts.find((p) => p.id === parseInt(id)));

	return (
		<div className={styles.productDetails}>
			<div className={styles.imageContainer}>
			<img src={product.thumbnail} alt={product.title} /></div>
			<div className={styles.detailsContainer}>
			<h3>{product.title}</h3>
			<p><strong>Price:</strong> ${product.price}</p>
			<p><strong>Brand:</strong> {product.brand}</p>
			<p><strong>Category:</strong> {product.category}</p>
			<p><strong>Rating</strong> {product.rating}</p>
			<p><strong>Available: </strong> {product.availabilityStatus}</p>
			<p><strong>Description: </strong> {product.description}</p>
			<p><strong>ReturnPolicy:</strong> {product.returnPolicy}</p>
			<p><strong>WarrantyInformation:</strong> {product.warrantyInformation}</p>
			<p><strong>ShippingInformation:</strong> {product.shippingInformation}</p>
			<button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
			<p><strong>Reviews:</strong> {}</p>
			</div>
			</div>
	);
}

export default ProductDetails;
