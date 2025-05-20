// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addingProducts } from './redux';
// import { useDispatch } from "react-redux";

// function ProductDetails({props}) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
// console.log(props)
//   return (
//     <>
//       <div className="card" style={{ width: "18rem" }}>
//         <img src={props.info.imageUrl} className="card-img-top" alt={props.info.name} />
//         <div className="card-body">
//           <h5 className="card-title" style={{ background: "bisque" }}>{props.info.name}</h5>
//           <p className="card-text">{props.info.description}</p>
//         </div>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">Price: Rs.{props.info.price}</li>
//           <li className="list-group-item">Stocks available: {props.info.countInStock}</li>
//         </ul>
//         <div className="card-body">
//         {props.info.countInStock >= 1 ? (
//          <button className="btn btn-outline-secondary" onClick={()=>dispatch(addingProducts(props.info))}>Add To Cart +</button>
//           ) : (
//           <a className="btn btn-danger disabled" role="button" aria-disabled="true">Out Of Stock</a>
//           )}

//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductDetails;


import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductDetails(props) {
  const navigate = useNavigate();
  function addToCart() {
    props.addToCart(props.selectedProduct);
    navigate('/cart')
  }
  console.log(props)
  return (
    <>
      ProductDetails
      <div className="card mb-3" style={{width: "92vw", height: "500px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.selectedProduct.imageUrl} style={{height: "445px"}} class="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ background: "bisque" , padding: "3px"}}>{props.selectedProduct.name}</h5>
        <p className="card-text"style={{ margin: "4px 2px", fontWeight: 500}} >{props.selectedProduct.description}</p> <br/>
        <p className="card-text">Rs. <small class="text-body-secondary">{props.selectedProduct.price}</small></p>
        <p className="card-text"><small class="text-body-secondary">Available in stock: {props.selectedProduct.countInStock}</small></p>
<button className="btn btn-primary m-1" onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ProductDetails