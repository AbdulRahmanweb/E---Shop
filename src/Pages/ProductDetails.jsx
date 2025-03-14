import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../Redux-Rtk/cart.Slice';
import { fetchProducts } from '../Redux-Rtk/productSlice';
import styles from '../Styles/ProductDetails.module.css';

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchProducts());
		window.scrollTo(0, 0);
	}, [dispatch]);

	const product = useSelector((state) => {
		return state.products.filteredProducts.find((p) => p.id === parseInt(id))
	});

	if (!product) {
		return <p>Loading product...</p>
	}

	return (<>
	<span className='btnBox'><button style={{fontSize: "1.5rem", marginLeft: "5px", marginTop: "5px"}} onClick={() => navigate('/')}>↩</button></span>
		<div className={styles.productDetails}>
			<div className={styles.imageContainer}>
			<img src={product.thumbnail} alt={product.title} />
			<button className={styles.addToCart} onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
			<p className={styles.ratingReviews}><strong>Rating and reviews</strong></p>
			<div className={styles.reviews}>
				{product.reviews && product.reviews.length > 0 ? (
					product.reviews.map((review, index) => (
						<div className={styles.reviewItem} key={index}>
							<p className={styles.name}><strong>{review.reviewerName}</strong></p>
							<p className={styles.rating}>Rating: 5/{review.rating}</p>
							<p className={styles.date}>{review.date}</p>
							<p className={styles.comment}><em>"{review.comment}"</em></p>
							<p className={styles.email}>{review.reviewerEmail}</p>
						</div>))) : (
							<p>No reviews yet</p>
						)}
			</div>
			</div>
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
			</div>
			</div>
			</>);
}

export default ProductDetails;
