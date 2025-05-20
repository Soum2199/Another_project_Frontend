import React, {useState} from 'react'
import './App.css';
import Product from './Product';
import { Route, Routes } from 'react-router-dom'
import Carts from './Carts';
import ProductDetails from './ProductDetails';
// import Shops from './Shops';
import Navbars from './Nave';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([])

// Add to Cart
// const addToCart = (product) => {
//   setCart((prevCart) => [...prevCart, product]);
// };
// let quantity = 0
function addToCart (product) {
  let newCart = [...cart];
  let itemInCart = newCart.find(
    (item) => product.name === item.name
  );
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    itemInCart = {
      ...product,
      quantity: 1,
    };
    newCart.push(itemInCart);
  }
  setCart(newCart);
};
 // Remove from Cart
 const removeFromCart = (productId) => {
  setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
};

console.log(selectedProduct)
  return (
    <div className='App'>
      <Navbars cartCount={ cart.length }/>
  <Routes>
    <Route index element={<Product details={setSelectedProduct} />}/>
    <Route path='/details' element={<ProductDetails selectedProduct={selectedProduct} addToCart={addToCart} />} />
    <Route path='/cart' element={<Carts cart={cart} removeFromCart={removeFromCart}/>} />
  </Routes>
    </div>
  )
}

export default App


