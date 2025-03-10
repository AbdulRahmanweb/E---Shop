import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../Redux-Rtk/cart.Slice';
import styles from '../Styles/Cart.module.css';

const Cart = () => {
	const dispatch = useDispatch();
	const {cartItems} = useSelector((state) => state.cart);
	const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const total = subTotal;

	return (
		<div className={styles.cartContainer}>
			<div className={styles.totalCart}>
		<h1>Your Cart</h1>
		{ cartItems.length > 0 && <p><strong>Total: ${total.toFixed(2)}</strong></p>}
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
								<button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button><span>{item.quantity}</span>
								<button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
							</div>
							<button className={styles.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
						</div>
					</div>
				))}
				<button className={styles.clearCartBtn} onClick={() => dispatch(clearCart())}>Clear Cart</button>
			</div>
		)}
		</div>
	);
}

export default Cart;
