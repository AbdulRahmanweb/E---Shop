import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/SuccessPage.module.css'

const SuccessPage = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.successPage}>
			<h1 style={{color: "green"}}>Order Placed Successfully ✅</h1>
			<p>Thanku for shopping with us: Your order is being processed</p>
			<button className={styles.goBackBtn} onClick={() => navigate('/')}>Go Back to Shop</button>
		</div>
	);
}

export default SuccessPage; 
