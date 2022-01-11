import React, { useState, useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import arrowIcon from '@icons/flechita.svg';
import '@styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const cartTotal = () => {
		const reducer = (acc, curr) => acc + curr.price;
		const total = state.cart.reduce(reducer, 0);
		return total;
	};

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
			{state.cart.map(product => (
				<OrderItem key={`orderItem-${product.id}`} product={product} />
			))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${cartTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
