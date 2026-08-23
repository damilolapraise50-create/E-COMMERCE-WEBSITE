import { useState, useEffect } from "react";
import "./Deals.css"
import { Link } from "react-router";

import model1 from "../../assets/Images/model1.png";
import model2 from "../../assets/Images/model2.png";
import model3 from "../../assets/Images/model3.png";
import model4 from "../../assets/Images/model4.png";

function Deals() {

  const images = [model1, model2, model3, model4];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  // Countdown Timer

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="deals-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="deal-title">Deals Of The Month</h2>
            <p className="deal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Scelerisque duis ultrices sollicitudin aliquam sem.</p>
            <Link to="/SignIn" className="btn btn-dark buy-btn">Buy Now</Link>
            <h4 className="count-title">Hurry, Before It's Too Late!</h4>
            <div className="countdown">
              <div className="time-box">
                <h3>{timeLeft.days || 0}</h3>
                <span>Days</span>
              </div>
              <div className="time-box">
                <h3>{timeLeft.hours || 0}</h3>
                <span>Hrs</span>
              </div>
              <div className="time-box">
                <h3>{timeLeft.minutes || 0}</h3>
                <span>Mins</span>
              </div>
              <div className="time-box">
                <h3>{timeLeft.seconds || 0}</h3>
                <span>Secs</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8">
            <div className="slider-wrapper">
              <div className="slider-images">
                <div className="main-card">
                  <img src={images[current]} alt=""/>
                </div>

                <div className="small-card">
                  <img src={images[(current + 1) % images.length]} alt=""/>
                </div>
                
                <div className="small-card">
                  <img src={images[(current + 2) % images.length]}alt="" />
                </div>
              </div>

              {/* Buttons */}
              <div className="slider-controls">
                <button onClick={prevSlide} className="circle-btn" >❮</button>
                <button onClick={nextSlide} className="circle-btn"> ❯</button>
              </div>

              {/* Indicators */}
              <div className="dots">
                {images.map((item, index) => (
                  <span
                    key={index}
                    className={current === index ? "dot active" : "dot"}
                    onClick={() => setCurrent(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  );

}

export default Deals;