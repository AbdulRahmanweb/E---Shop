import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Redux-Rtk/cart.Slice';
import styles from '../Styles/Checkout.module.css';

const Checkout = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	console.log(cartItems)
	const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const total = subTotal;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		address: "",
		paymentMethod: "Credit Card"
	});

	const handleChange = (e) => {
		setUserInfo({...userInfo, [e.target.name]: e.target.value});
	}

	const handleCheckout = (e) => {
		e.preventDefault();
		dispatch(clearCart());
		navigate('/success');
	}

	return (
		<div className={styles.checkoutPage}>
			<button style={{fontSize: "1.5rem", padding: "0px"}} onClick={() => navigate('/cart')}>↩</button>
			<h1>Checkout</h1>
			<div className={styles.summary}>
				<h2>Order Summary</h2>
				{cartItems.map((item) => (
					<p key={item.id}>
						{item.title}  <strong>Quantity: </strong>{item.quantity} = ${item.price}
					</p>
				))}
				<h3>Total: ${total.toFixed(2)}</h3>
			</div>

			<form className={styles.form} onSubmit={handleCheckout}>
				<input type='text' name='name' placeholder='Full Name' value={userInfo.name} onChange={handleChange} required />
				<input type='email' name='email' placeholder='Email' value={userInfo.email} onChange={handleChange} required />
				<input type='text' name='address' placeholder='Shipping Address' value={userInfo.address} onChange={handleChange} required />
				<select name='paymentMethod' value={userInfo.paymentMethod} onChange={handleChange}>
				<option>Credit Card</option>
				<option>PayPal</option>
				<option>Cash On Delivery</option>
				</select>
				<button className={styles.placeOrderBtn} type='submit'>Place Order</button>
			</form>
		</div>
	);
}

export default Checkout;