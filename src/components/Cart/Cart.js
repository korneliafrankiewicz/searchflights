import React, { useState } from 'react';
import './Cart.scss';
import "../Flights/Flights"



function Cart({products}) {
  return (
    <div>
      <h2>Koszyk</h2>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

