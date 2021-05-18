import React, {useState} from "react";
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

function Shop() {
  const [products, setProducts] = useState(false);
  const [cart, setCart] = useState([]);

  setProducts(prev => (prev.products));
  
  const handleAddToCart = (id) => {
    const productToAdd = products.filter(product => product.id === id)[0];
    setCart(prevState => [...prevState, productToAdd]);
  };

  return (
    <>
      <Products products={products} onAddToCart={handleAddToCart}/>
      <Cart products={cart}/>
    </>
  );
}

export default Shop;