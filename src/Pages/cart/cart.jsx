import "./cart.css";
import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import tallboy from "../../assets/Images/tallboy.png"
import tallgirl from "../../assets/Images/tallgirl.png"


function Cart() {

    const location = useLocation();
    const navigate = useNavigate();

    // Get the product information sent from Product.jsx
    const {
        image,
        productName,
        color,
        price
    } = location.state || {};

    // Quantity for the cart page
    const [cartQuantity, setCartQuantity] = useState(
        location.state?.quantity || 1
    );
    // Gift wrapping
    const [giftWrap, setGiftWrap] = useState(false);
    // Product price
    const productPrice = price || 39.00;
    // Gift wrap price
    const giftPrice = giftWrap ? 10 : 0;
    // Total
    const subtotal = (productPrice * cartQuantity) + giftPrice;
    // Increase quantity
    const increaseQuantity = () => {
        setCartQuantity((prev) => prev + 1);
    };
    // Decrease quantity
    const decreaseQuantity = () => {
        setCartQuantity((prev) => Math.max(1, prev - 1));
    };
    // Remove product
const removeProduct = () => {
    navigate("/Dashboard");
};

// Go to checkout
const goToCheckout = () => {
    navigate("/Checkout", {
        state: {
            image: image,
            productName: productName,
            color: color,
            price: productPrice,
            quantity: cartQuantity
        }
    });
}; {
};
    const handleLogout = () => {
    // Remove the user's login information
    localStorage.removeItem("isLoggedIn");
    // Go back to the homepage
    navigate("/");
  };
  
    return (
        <div className="top-head">
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          {/* Logo */}
          <Link to=""className="navbar-brand"style={{fontFamily: "serif",fontSize: "22px",fontWeight: "500",}} >
            FASCO</Link>

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
              <i className="bi bi-star"></i>
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

            {/*PAGE TITLE*/}
            <section className="cart-title-section">
                <h1>Shopping Cart</h1>
                <div className="cart-breadcrumb">
                    <Link to="/Dashboard">Home</Link>
                    <span>›</span>
                    <strong><span>Your Shopping Cart</span></strong>
                </div>
            </section>

            {/*CART*/}
            <div className="cart-container">
                {/* TABLE HEADINGS */}
                <div className="cart-table-header">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>

                {/* PRODUCT ROW */}
                <div className="cart-table-row">
                    {/*PRODUCT*/}
                    <div className="cart-product-info">
                        <img src={image}alt={productName || "Product"}className="cart-product-image"/>

                        <div className="cart-product-text">
                            <h3>{productName || "Mini Dress With Ruffled Straps"}</h3>
                            <p>Color : {color || "Red"}</p>
                            <button className="cart-remove" onClick={removeProduct}>Remove</button>
                        </div>
                    </div>

                    {/* PRICE */}
                    <div className="cart-price">${productPrice.toFixed(2)}</div>
                    {/* QUANTITY */}

                    <div className="cart-quantity-wrapper">
                        <div className="cart-quantity-box">
                            <button onClick={decreaseQuantity}>−</button>
                            <span> {String(cartQuantity).padStart(2, "0")}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>

                    {/* TOTAL */}
                    <div className="cart-total">${(productPrice * cartQuantity).toFixed(2)}</div>
                </div>

                {/*GIFT WRAP*/}
                <div className="gift-wrap-section">
                    <label>
                        <input type="checkbox"checked={giftWrap}onChange={(e) => setGiftWrap(e.target.checked) }/>
                        <span> For <strong>$10.00</strong> Please Wrap The Product</span>
                    </label>
                </div>

                {/*SUMMARY*/}
                <div className="cart-summary">
                    <div className="summary-line">
                        <span>Subtotal</span>
                        <strong>${subtotal.toFixed(2)}</strong>
                    </div>
                    <button className="btn btn-dark w-100 mt-3"onClick={goToCheckout}>Checkout</button>
                    <Link to="/Dashboard"className="continue-shopping">Continue Shopping</Link>
                </div>
            </div>
            <div className="newsletter-section">
                                    {/* LEFT IMAGE */}
                                    <div className="newsletter-person newsletter-man">
                                        <img src={tallboy} alt="Male fashion model" />
                                    </div>
                                    {/* CENTER CONTENT */}
                                    <div className="newsletter-content">
                                        <h2>Subscribe To Our Newsletter</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Scelerisque duis
                                            <br />
                                            ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
                                        </p>
                                        <div className="newsletter-form">
                                            <input type="email"placeholder="Email..."/>
                                            <button>Subscribe Now</button>
                                        </div>
                                    </div>
                                    {/* RIGHT IMAGE */}
                                    <div className="newsletter-person newsletter-woman">
                                        <img src={tallgirl} alt="Female fashion model" />
                                    </div>
                                </div>
                                {/* FOOTER */}
                                <footer className="footer">
                                    <div className="footer-top">
                                        <h3>FASCO</h3>
                                        <div className="footer-links">
                                            <a href="#">Support Center</a>
                                            <a href="#">Invoicing</a>
                                            <a href="#">Contract</a>
                                            <a href="#">Careers</a>
                                            <a href="#">Blog</a>
                                            <a href="#">FAQ,s</a>
                                        </div>
                                    </div>
                    
                                    <div className="footer-bottom">
                                        <p>Copyright © 2022 Xpro . All Rights Reserved.</p>
                                    </div>
                                </footer>     
        </div>
    );
}

export default Cart;