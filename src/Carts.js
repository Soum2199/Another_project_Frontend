import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Carts(props) {
  console.log(props)
  const [count, setCount] = useState(1)
  const navigate = useNavigate();
  
  function removeFromCart() {
    //logic to clear  the cart, and to show that my cart is empty
    props.removeFromCart(props.selectedProduct);
    navigate('/')
    // alert("your cart is empty")
    document.getElementsByTagName("h1").innerHTML = "your cart is empty"
    // document.getElementsByTagName("h1").innerHTML = "You have no items purchased";
  }
  function handlePlus() {
    setCount(count + 1)
  }
  function handleMinus() {
   if (count <= 1) { setCount(1)}
   else{
    let yip = setCount(count - 1);
    // yip == 1? removeFromCart() : yip;
   }
  }
  
  return (
    <>
      Carts
     <h1>{props.cart[0].name}</h1>
      {props.cart.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <div style={{display: 'flex', justifyContent: "space-around"}}>
            <img src={item.imageUrl} alt={item.name} style={{ height: '150px', width: "15%" }} />
            <h3 className='fs-5' style={{ margin: '3px', paddingTop: "10px" }}>{item.name}</h3>
            <p className='fs-6'style={{ padding: "3px",margin: '5px' }}>Price: Rs. {item.price}</p>
          </div>
          <button type="button" className="btn btn-primary btn-sm fs-4" onClick={handlePlus}>+</button>
        <span className='fs-4'style={{ padding: "3px" , marginLeft: "3px", marginRight: "3px"}}>{count}</span>
          <button type="button" className="btn btn-primary btn-sm fs-4" onClick={handleMinus}>-</button>
        </div>
      ))}
      <br/>
      <h1>Total cost: Rs. {props.cart[0].price * count}</h1>
     <button className="btn btn-danger btn-sm fs-6" onClick={removeFromCart}>Remove item</button>
    </>
  )
}

export default Carts