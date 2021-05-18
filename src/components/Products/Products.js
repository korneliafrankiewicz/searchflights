import React from "react";

function Products({products, onAddToCart}) {

  return (
    <div>
      <h2>Produkty</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <button onClick={() => onAddToCart(product.id)}>Kup!</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;