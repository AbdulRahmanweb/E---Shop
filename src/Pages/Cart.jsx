import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, /*clearCart*/ } from '../Redux-Rtk/cart.Slice';
import styles from '../Styles/Cart.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
	const dispatch = useDispatch();
	const {cartItems} = useSelector((state) => state.cart);
	const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const total = subTotal;
	const navigate = useNavigate();

	return (
		<div className={styles.cartContainer}>
			<button style={{fontSize: "1.15rem"}} onClick={() => navigate('/')}>↩</button>
			<div className={styles.totalCart}>
		<h1>Your Cart</h1>
		{ cartItems.length > 0 && <h2><strong>Total:</strong> ${total.toFixed(2)}</h2>}
		</div>
		{cartItems.length === 0 ? (<p>Your cart is empty</p>) : (
			<div className={styles.cartList}>
				{cartItems.map((item) => (
					<div className={styles.cartItem} key={item.id}>
						<img className={styles.cartImage} src={item.thumbnail} alt={item.title} />
						<div className={styles.itemDetails}>
							<h3>{item.title}</h3>
							<p><strong>Price:</strong> ${item.price}</p>
							<div className={styles.cartControls}>
								<button style={{background: "gray", border: "none", cursor: "pointer"}} onClick={() => dispatch(decreaseQuantity(item.id))}>-</button><span>{item.quantity}</span>
								<button style={{background: "gray", border: "none", cursor: "pointer"}} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
							</div>
							<button className={styles.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
						</div>
					</div>
				))}
				{/*<button className={styles.clearCartBtn} onClick={() => dispatch(clearCart())}>Clear Cart</button>*/}
				<button className={styles.proceedBtn} onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
			</div>
		)}
		</div>
	);
}

export default Cart;
