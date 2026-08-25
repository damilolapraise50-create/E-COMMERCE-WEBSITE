import { useState } from "react";
import "./Filter.css";
import { Link } from "react-router";

// Replace these with your actual images
import dash1 from "../../assets/Images/dash1.png";
import dash2 from "../../assets/Images/dash2.png";
import dash3 from "../../assets/Images/dash3.png";
import dash4 from "../../assets/Images/dash4.png";
import dash5 from "../../assets/Images/dash5.png";
import dash6 from "../../assets/Images/dash6.png";
import dash7 from "../../assets/Images/dash7.png";
import dash8 from "../../assets/Images/dash8.png";
import dash9 from "../../assets/Images/dash9.png";
import Broski2 from "../../assets/Images/Broski2.png"
import features from "../../assets/Images/features.png"
import IG from "../../components/IG Follow/IG";
import Test from "../../components/TestFoot/Test";
import tallboy from "../../assets/Images/tallboy.png"
import tallgirl from "../../assets/Images/tallgirl.png"

function Filter() {

    // -----------------------------
    // PRODUCT DATA
    // -----------------------------

    const products = [
        {
            id: 1,
            name: "Rounded Red Hat",
            price: 8,
            image: dash1,
            sizes: ["S", "M", "L"],
            color: "red",
            brand: "Minimalist",
            collection: "New arrivals",
            tags: ["Fashion", "Hats"]
        },
        {
            id: 2,
            name: "Linen-blend Shirt",
            price: 17,
            image: dash2,
            sizes: ["M", "L", "XL"],
            color: "white",
            brand: "Reebok",
            collection: "Best sellers",
            tags: ["Fashion", "Shirts"]
            
        },
        {
            id: 3,
            name: "Long Sleeve Coat",
            price: 106,
            image: dash3,
            sizes: ["S", "M", "L"],
            color: "black",
            brand: "Minimalist",
            collection: "New arrivals",
            tags: ["Fashion"]
        },
        {
            id: 4,
            name: "Boxy Denim Hat",
            price: 25,
            image: dash4,
            sizes: ["S", "M"],
            color: "blue",
            brand: "Adidas",
            collection: "Accessories",
            tags: ["Hats", "Denim"]
        },
        {
            id: 5,
            name: "Linen Plain Top",
            price: 25,
            image: dash5,
            sizes: ["S", "M", "L"],
            color: "black",
            brand: "Nike",
            collection: "Best sellers",
            tags: ["Fashion"]
        },

        {
            id: 6,
            name: "Oversized T-shirt",
            price: 11,
            image: dash6,
            sizes: ["M", "L", "XL"],
            color: "pink",
            brand: "Vans",
            collection: "New arrivals",
            tags: ["Fashion", "Shirts"]
        },
        {
            id: 7,
            name: "Polarised Sunglasses",
            price: 18,
            image: dash7,
            sizes: ["S"],
            color: "black",
            brand: "Nike",
            collection: "Accessories",
            tags: ["Sunglasses"]
        },
        {
            id: 8,
            name: "Rockstar Jacket",
            price: 22,
            image: dash8,
            sizes: ["M", "L"],
            color: "black",
            brand: "Reebok",
            collection: "Best sellers",
            tags: ["Fashion"]
        },
        {
            id: 9,
            name: "Dotted Black Dress",
            price: 20,
            image: dash9,
            sizes: ["S", "M", "L"],
            color: "black",
            brand: "Minimalist",
            collection: "New arrivals",
            tags: ["Fashion", "Dresses"]
        }
    ];


    // -----------------------------
    // FILTER STATES
    // -----------------------------

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCollection, setSelectedCollection] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    // FILTER PRODUCTS
    const filteredProducts = products.filter((product) => {
        // SIZE
        if (
            selectedSize &&
            !product.sizes.includes(selectedSize)
        ) {
            return false;
        }
        // COLOR
        if (
            selectedColor &&
            product.color !== selectedColor
        ) {
            return false;
        }
        // PRICE
        if (selectedPrice === "0-50" && product.price > 50) {
            return false;
        }
        if (selectedPrice === "50-100" &&
            (product.price < 50 || product.price > 100)) {
            return false;
        }
        if (selectedPrice === "100-150" &&
            (product.price < 100 || product.price > 150)) {
            return false;
        }
        // BRAND
        if (
            selectedBrand &&
            product.brand !== selectedBrand
        ) {
            return false;
        }
        // COLLECTION
        if (
            selectedCollection &&
            product.collection !== selectedCollection
        ) {
            return false;
        }
        // TAG
        if (
            selectedTag &&
            !product.tags.includes(selectedTag)
        ) {
            return false;
        }
        return true;
    });
   
    // CLEAR FILTERS
    const clearFilters = () => {
        setSelectedSize("");
        setSelectedColor("");
        setSelectedPrice("");
        setSelectedBrand("");
        setSelectedCollection("");
        setSelectedTag("");
    };
    return (
<div>
        <div className="shop-page d-flex">
{/* FILTER SIDEBAR */}
       
            <aside className="filters">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Filters</h5>
                    <button className="clear-btn" onClick={clearFilters}> Clear</button>
                </div>

                {/* SIZE */}
                <div className="filter-section">
                    <h6>Size</h6>
                    <div className="size-options">
                        {["S", "M", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                className={
                                    selectedSize === size
                                        ? "size-btn selected"
                                        : "size-btn"
                                }
                                onClick={() => {

                                    setSelectedSize(
                                        selectedSize === size
                                            ? ""
                                            : size
                                    );
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                {/* COLORS */}
                <div className="filter-section">
                    <h6>Colors</h6>
                    <div className="color-options">
                        {[
                            "red",
                            "yellow",
                            "orange",
                            "green",
                            "blue",
                            "purple",
                            "pink",
                            "black",
                            "white"
                        ].map((color) => (
                            <button
                                key={color}
                                className={
                                    `color ${color} ${
                                        selectedColor === color
                                            ? "color-selected"
                                            : ""
                                    }`
                                }
                                onClick={() => {

                                    setSelectedColor(
                                        selectedColor === color
                                            ? ""
                                            : color
                                    );
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* PRICES */}
                <div className="filter-section">
                    <h6>Prices</h6>
                    <div className="price-options">
                        {[
                            ["0-50", "$0 - $50"],
                            ["50-100", "$50 - $100"],
                            ["100-150", "$100 - $150"]
                        ].map(([value, label]) => (
                            <button
                                key={value}
                                className={
                                    selectedPrice === value
                                        ? "price-btn selected-price"
                                        : "price-btn"
                                }
                                onClick={() => {

                                    setSelectedPrice(
                                        selectedPrice === value
                                            ? ""
                                            : value
                                    );
                                }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* BRANDS */}
                <div className="filter-section">
                    <div className="filter-heading">
                        <h6>Brands</h6>          
                    </div>

                    <div className="brand-list"><div>                       
                    </div>
                        {[
                            "Minimalist",
                            "Reebok",
                            "Adidas",
                            "Nike",
                            "Vans"
                        ].map((brand) => (
                            <button
                                key={brand}
                                className={
                                    selectedBrand === brand
                                        ? "filter-link selected-filter"
                                        : "filter-link"
                                }
                                onClick={() => {

                                    setSelectedBrand(
                                        selectedBrand === brand
                                            ? ""
                                            : brand
                                    );
                                }}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>

                {/* COLLECTIONS */}
                <div className="filter-section">
                    <div className="filter-heading">
                     <h6>Collections</h6>                   
                    </div>
                    <div className="collection-list">
                        {[
                            "All products",
                            "Best sellers",
                            "New arrivals",
                            "Accessories"
                        ].map((collection) => (
                            <button
                                key={collection}
                                className={
                                    selectedCollection === collection
                                        ? "filter-link selected-filter"
                                        : "filter-link"
                                }
                                onClick={() => {

                                    setSelectedCollection(
                                        collection === "All products"
                                            ? ""
                                            : collection
                                    );

                                }}
                            >
                                {collection}
                            </button>
                        ))}
                    </div>
                </div>

                {/* TAGS */}
                <div className="filter-section">
                    <h6>Tags</h6>
                    <div className="tags">
                        {[
                            "Fashion",
                            "Hats",
                            "Sandals",
                            "Bags",
                            "Shoes",
                            "Denim",
                            "Sunglasses",
                            "Beachwear"
                        ].map((tag) => (
                            <button
                                key={tag}
                                className={
                                    selectedTag === tag
                                        ? "tag selected-tag"
                                        : "tag"
                                }
                                onClick={() => {

                                    setSelectedTag(
                                        selectedTag === tag
                                            ? ""
                                            : tag
                                    );
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* PRODUCTS */}
            <main className="products-section">
                {/* TOP BAR */}
                <div className="products-topbar">
                    <span>
                        {filteredProducts.length} Products
                    </span>
                </div>

                {/* PRODUCTS */}
                <div className="row g-3">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={product.id}
                            >
                                <div className="product-card">
                                    <img
                                        src={product.image}
                                        className="product-image"
                                        alt={product.name}
                                    />
                                    <h6>
                                        {product.name}
                                    </h6>
                                    <p>
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <div className="product-color">
                                        <span
                                            className={`color ${product.color}`}
                                        />
                                    </div>
                                </div>
                           </div>
                        ))
                    ) : (

                        <div className="no-products">
                            <h5>No products found</h5>
                            <p>
                                Try changing your filters.
                            </p>
                            <button
                                className="btn btn-dark"
                                onClick={clearFilters}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                </div>
                {/* PAGINATION */}
                <div className="pagination-container">
                    <button className="page-btn active">
                        1
                    </button>
                    <button className="page-btn">
                        2
                    </button>
                    <button className="page-btn">
                        3
                    </button>
                    <button className="page-btn">
                        ›
                    </button>
             </div>
            </main>
        </div>

        <div className="container-fluid product-section">
          <div className="row align-items-stretch">
        
            {/* LEFT - IMAGE */}
            <div className="col-lg-6 image-side">
              <img src={Broski2}alt="Peaky Blinders"className="img-fluid produce-image"/>
            </div>
            {/* RIGHT - TEXT */}
            <div className="col-lg-6 text-side">
              <p className="collection mt-5">Women Collection</p>
              <h1>Peaky Blinders</h1>
              <h6>DESCRIPTION</h6>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque tellus sollicitudin aliquam quam. Scelerisque
                nulla ultrices sollicitudin.
              </p>
              <div className="size">
                <span>Size:</span>
                <button className="size-btn">M</button>
              </div>
              <h4>$100.00</h4>
              <Link to="/SignIn" className="btn btn-dark buy-btn">Buy Now</Link>
            </div>
            <div className="logos-image">
             <img src={features} className="img-fluid w-100" alt="" />
          </div>
          </div>
        </div>
        <IG />
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
                            </div>
                        </div>
        
                        <div className="footer-bottom">
                            <p>Copyright © 2022 Xpro . All Rights Reserved.</p>
                        </div>
        
                    </footer>
</div>        
    );
}

export default Filter;