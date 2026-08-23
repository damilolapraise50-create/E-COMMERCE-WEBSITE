import "./Product.css"
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import pimg from "../../assets/Images/pimg.png";
import pimg2 from "../../assets/Images/pimg2.png";
import pimg3 from "../../assets/Images/pimg3.png";
import pimg4 from "../../assets/Images/pimg4.png";
import pimg5 from "../../assets/Images/pimg5.png";
import pimg6 from "../../assets/Images/pimg6.png";
import pimg7 from "../../assets/Images/pimg7.png";
import pay from "../../assets/Images/pay.png";

function Product () {
    // All the product images
    const images = [
        pimg,
        pimg2,
        pimg3,
        pimg4,
        pimg5,
        pimg6,
        pimg7,
    ];

    // Controls which image is displayed as the big image
    const [selectedImage, setSelectedImage] = useState(0);


    // Quantity selected by customer
    const [quantity, setQuantity] = useState(1);
    // Controls the shopping cart side panel
const [cartOpen, setCartOpen] = useState(false);

// Controls the gift wrapping checkbox
const [giftWrap, setGiftWrap] = useState(false);

    // Timer
    const [time, setTime] = useState({
        hours: 0,
        minutes: 5,
        seconds: 59
    });

    // Countdown timer
    useEffect(() => {

        const timer = setInterval(() => {

            setTime((prev) => {

                let { hours, minutes, seconds } = prev;
                if (seconds > 0) {
                    seconds--;
                } 
                else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } 
                    else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        }
                    }
                }
                return {
                    hours,
                    minutes,
                    seconds
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);


  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the user's login information
    localStorage.removeItem("isLoggedIn");
    // Go back to the homepage
    navigate("/");
  };

const productPrice = 39.00;

const giftWrapPrice = giftWrap ? 10.00 : 0;

const subtotal = (productPrice * quantity) + giftWrapPrice;
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
              <i className="bi bi-bag"></i>
            </div>
          </div>
        </div>
      </nav>

<div className="container product-page">
            <div className="row">
                {/*PRODUCT IMAGES*/}
                <div className="col-lg-6 product-gallery">
                    <div className="row">

                        {/* SMALL IMAGES */}
                        <div className="col-2 thumbnails">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail ${
                                        selectedImage === index
                                            ? "active-thumbnail"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedImage(index)} >
                                    <img src={image} alt={`product ${index + 1}`}/>
                                </div>
                            ))}
                        </div>
                        {/* BIG IMAGE */}
                        <div className="col-10 main-product-image">
                            <img src={images[selectedImage]}alt="product" />
                        </div>
                    </div>
                </div>

                {/*PRODUCT DETAILS*/}

                <div className="col-lg-6 product-details">
                    <small className="brand">FASCO</small>
                    <h2>Denim Jacket</ h2>

                    {/* RATING */}
                    <div className="rating">★★★★★ <span>(3)</span></div>

                    {/* PRICE */}
                    <div className="price">
                        <strong>$39.00</strong>
                        <del>$59.00</del>
                        <span className="discount"> Save 33%</span>
                    </div>

                    {/* PEOPLE VIEWING */}
                    <p className="viewers">👁 24 people are viewing this right now</p>

                    {/*SALE TIMER */}
                    <div className="sale-timer">
                        <span>Hurry up! Sale ends in:</span>
                        <strong>
                            {String(time.hours).padStart(2, "0")}
                            &nbsp; : &nbsp;
                            {String(time.minutes).padStart(2, "0")}
                            &nbsp; : &nbsp;
                            {String(time.seconds).padStart(2, "0")}
                        </strong>
                    </div>


                    {/*STOCK*/}

                    <div className="stock-section">
                        <p> Only <strong>9</strong> item(s) left in stock!</p>

                        {/* RED STOCK LINE */}
                        <div className="stock-bar">
                            <div className="stock-progress"></div>
                        </div>
                    </div>

                    {/*SIZE */}
                    <div className="size-section">
                        <p><strong>Size:</strong> M</p>
                        <div className="sizes">
                            <button className="selected-size">M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                    </div>

                    {/*COLOR*/}

                    <div className="color-section">
                        <p><strong>Color:</strong> Blue</p>
                        <div className="colors">
                            <span className="color blue"></span>
                            <span className="color black"></span>
                            <span className="color pink"></span>
                        </div>
                    </div>

                    {/*QUANTITY + CART*/}

                    <div className="cart-section">
                        <div>
                            <p>Quantity</p>
                            <div className="quantity">
                                <button
                                    onClick={() =>
                                        setQuantity(
                                            Math.max(1, quantity - 1)
                                        )
                                    }
                                >
                                    −
                                </button>
                                <span>{quantity}</span>
                                <button
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button className="add-cart"onClick={() => setCartOpen(true)}>Add to cart</button>
                    </div>

                    {/*EXTRA INFORMATION*/}
                    <div className="extra-info">
                        <div className="actions">
                            <span>⇅ Compare</span>
                            <span>❔ Ask a question</span>
                            <span>♧ Share</span>
                        </div>
                        <hr />
                        <p> 🚚 <strong>Estimated Delivery:</strong> Jul 30 - Aug 03</p>

                        <p>🚚 <strong>Free Shipping & Returns:</strong>On all orders over $75</p>
                        <div className="payment">
                            <img src={pay}alt="payment Options" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* ================= SIDE CART ================= */}
{cartOpen && (
    <div className="cart-overlay"onClick={() => setCartOpen(false)}></div>
)}

<div className={`cart-sidebar ${cartOpen ? "cart-open" : ""}`}>
    {/* CART HEADER */}
    <div className="cart-header">
        <div><h3>Shopping Cart</h3>
        <p>Buy <strong>${subtotal.toFixed(2)}</strong> More And Get{" "}
         <strong>Free Shipping</strong>
            </p>
        </div>
        <button className="close-cart"onClick={() => setCartOpen(false)} >  × </button>
    </div>
    {/* CART PRODUCT */}
    <div className="cart-product">

        <img src={images[selectedImage]} alt="Denim Jacket"/>
        <div className="cart-product-details">
            <h5>Denim Jacket</h5>
            <p>Color : Blue</p>
            <strong>$39.00</strong>

            {/* CART QUANTITY */}
            <div className="cart-quantity">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1)) }> −</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

        </div>
    </div>
    <hr />

    {/* GIFT WRAP */}
    <div className="gift-wrap">
        <label>
            <input type="checkbox"checked={giftWrap}onChange={(e) => setGiftWrap(e.target.checked)} />
            <span>For $10.00 Please Wrap The Product </span>
        </label>
    </div>
    <hr />

    

    {/* SUBTOTAL */}
    <div className="cart-subtotal">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
    </div>

    {/* VIEW CART */}
   <button
    className="view-cart-bon"
    onClick={() =>
        navigate("/cart", {
            state: {
                image: images[selectedImage],
                productName: "Denim Jacket",
                color: "Blue",
                price: 39.00,
                quantity: quantity
            }
        })
    }
>
 View Cart
</button>
</div>

</div>

    )
}

export default Product