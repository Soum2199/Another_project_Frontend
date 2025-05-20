import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbars({ cartCount }) {
  const navigate = useNavigate()

  function goToCart() {
    navigate("/cart")
  }

  return (
    <>
      <nav className="navbar bg-body-primary" style={{ backgroundColor: "lightsteelblue" }}>
        <div className="container-fluid">
          <a className="navbar-brand mb-1" href="/">Home</a>
          <button type="button" className="btn btn-secondary" onClick={goToCart}>
            Cart ({cartCount})
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbars


{/* <div>
  <input type="checkbox" id="checkbox" />
  <label>{items.children}</label>
</div> */}