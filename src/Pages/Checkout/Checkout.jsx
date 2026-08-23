import "./Checkout.css";
import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { Link } from "react-router";

function Checkout() {

    const navigate = useNavigate();
    const location = useLocation();

    // Get the information sent from Cart.jsx
    const {
        image,
        productName,
        color,
        price,
        quantity
    } = location.state || {};

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    // Calculate subtotal
    const itemSubtotal = (price || 0) * (quantity || 1);

    return ( 
       <div className="top-head">
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          {/* Logo */}
          <h1 className="navbar-brand"style={{fontFamily: "serif",fontSize: "22px",fontWeight: "500",}} >
            FASCO</h1>

          {/* Mobile button */}
          <button className="navbar-toggler"type="button" data-bs-toggle="collapse"data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto gap-lg-4">
             
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">Shop</Link>
              </li>

              <li className="nav-item">
                <strong><Link className="nav-link" to=""> PRODUCTS </Link></strong>
              </li>
            </ul>

            {/* Right side icons */}
            <div className="d-flex align-items-center gap-3 icons-tab">
              {/* Search */}
              <i className="bi bi-search"></i>
              {/* User dropdown */}
              <div className="dropdown">
                <button className="btn p-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/"> Welcome!</Link> </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item text-danger"onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i>Logout</button>
                  </li>
                </ul>
              </div>
              {/* Wishlist */}
              {/* Cart */}
              <i className="bi bi-star"></i>
                    <div className="cart-bag">
                        <i className="bi bi-bag"></i>
                        <span>1</span>
                    </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="cart-title-sec">
                <h1>FASCO Demo Checkout</h1>
            </section>
<div className="checkout-page">

  <div className="checkout-left">
    {/* CONTACT */}
    <section>
      <div className="section-heading">
        <h2>Contact</h2>
      </div>
      <input type="email"placeholder="Email Address"className="checkout-input"/>
    </section>

    {/* DELIVERY */}
    <section>
      <h2>Delivery</h2>
      <select className="checkout-input">
        <option>Country / Region</option>
        <option>Nigeria</option>
        <option>United Kingdom</option>
      </select>
      <div className="two-inputs">
        <input type="text" placeholder="First Name"className="checkout-input"/>
        <input type="text"placeholder="Last Name"className="checkout-input"/>
      </div>
      <input type="text"placeholder="Address"className="checkout-input"/>
      
      <div className="two-inputs">
        <input type="text"placeholder="City"className="checkout-input"/>
        <input type="text" placeholder="Postal Code"className="checkout-input"/>
      </div>

      <label className="save-info">
        <input type="checkbox" />Save This Info For Future
      </label>
    </section>

    {/* PAYMENT */}
    <section>
      <h2>Payment</h2>
      <select className="checkout-input">
        <option>Credit Card</option>
        <option>Debit Card</option>
      </select>

      <input type="text"placeholder="Card Number" className="checkout-input"/>

      <div className="two-inputs">
        <input type="text" placeholder="Expiration Date"className="checkout-input"/>
        <input type="text" placeholder="Security Code"className="checkout-input"/>
      </div>
      <input type="text"placeholder="Card Holder Name"className="checkout-input"/>

      <label className="save-info">
        <input type="checkbox" />Save This Info For Future
      </label>
    </section>
    <button className="pay-btn">Pay Now</button>
  </div>

  {/* RIGHT SIDE */}
  <div className="checkout-right">
            <div className="product-summary">
                <div className="summary-image">
                    <img src={image}alt={productName}/>
                    <span className="quantity">{quantity}</span>
                </div>

                <div className="summary-info">
                    <h4>{productName}</h4>
                    <p>{color}</p>
                </div>

                <p className="summary-price">
                    ${price}
                </p>
            </div>

    {/* DISCOUNT */}
    <div className="discounts">
    <input type="text" placeholder="Discount code"className="discounts-input"/>
    <button className="apply-btn">Apply</button>
</div>

    {/* TOTAL */}
    <div className="totals">
    <div>
        <span>Subtotal</span>
        <span>${itemSubtotal}</span>
    </div>
    <div>
        <span>Shipping</span>
        <span>$40</span>
    </div>
    <div className="total">
        <span>Total</span>
        <span>${itemSubtotal + 40}</span>
    </div>

</div>
  </div>
</div>
</div>
      
    )
}
export default Checkout