import React, {useState, useEffect} from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom'

function Product(props) {
  const navigate = useNavigate()
    const [productList, setProductList] = useState([])

    useEffect(() => {
      Axios.get("http://localhost:8086/get/products")
      .then(dates => {
        console.log(dates)
        console.log(dates.data)
        setProductList(dates.data)
      })
      .catch(err => console.log(err))  
    }, [])
    
    function showDetails(details) {
      props.details(details)
      navigate("/details")
    }
    
    return (
    <>
    {
productList.map(function(i){
  return   <div style={{display: "grid", gridRow: "repeat(0.75fr, 2)", gap: "16px",  width: "299px", padding: "10px"}}>
  <div class="card" style={{width: "19rem", margin:"6px", border: "1px solid blue"}}>
<img src={i.imageUrl} class="card-img-top" alt="..." style={{ height: "260px" }} />
<div class="card-body">
  <p class="card-text">{i.name}</p>
  <h5 class="card-text">Price: Rs.{i.price}/-</h5>
  <button onClick={() => showDetails(i)} type="button" class="btn btn-outline-dark d-grid gap-2 col-6 mx-auto">View</button>
</div>
</div>
    </div>
 })
}
  </>
  )
}

export default Product