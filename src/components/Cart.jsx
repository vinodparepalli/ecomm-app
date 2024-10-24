import React, { useContext } from 'react';
import { CartContext } from './CartProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {item.title}
                <span>${item.price.toFixed(2)}</span>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h5>Total: ${totalPrice.toFixed(2)}</h5>
            <Link className="btn btn-primary w-100" to='/Checkout'>Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
