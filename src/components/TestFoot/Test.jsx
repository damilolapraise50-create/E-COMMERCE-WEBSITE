import { useState } from "react";
import "./Test.css";

import card from "../../assets/Images/card.png";
import card1 from "../../assets/Images/card1.png";
import card2 from "../../assets/Images/card2.png";
import tallboy from "../../assets/Images/tallboy.png"
import tallgirl from "../../assets/Images/tallgirl.png"

function Test() {

    const images = [card, card1, card2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    const previousImage = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + images.length) % images.length
        );
    };

    return (
        <div className="social">
            <div className="text-center mt-5 medio">
                <h3>This Is What Our Customers Say</h3>
                <p className="follow">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Scelerisque duis
                </p>
            </div>
    
            <div className="testimonial-slider">
                {images.map((image, index) => {
                    let position = "hidden";
                    if (index === currentIndex) {
                        position = "center";
                    } 
                    else if (
                        index ===
                        (currentIndex - 1 + images.length) % images.length
                    ) {
                        position = "left";
                    } 
                    else if (
                        index ===
                        (currentIndex + 1) % images.length
                    ) {
                        position = "right";
                    }
                    return (
                        <img
                            key={index}
                            src={image}
                            alt={`Customer testimonial ${index + 1}`}
                            className={`testimonial-card ${position}`}
                        />
                    );
                })}

            </div>

            <div className="testimonial-arrows">
                <button className="testimonial-arrow" onClick={previousImage}> &#10094;</button>
                <button className="testimonial-arrow"onClick={nextImage}> &#10095;</button>
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
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright © 2022 Xpro . All Rights Reserved.</p>
                </div>

            </footer>
            </div>
    );
}

export default Test;