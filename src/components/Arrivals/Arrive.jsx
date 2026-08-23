import { useState, useEffect } from "react";
import "./Arrive.css"
import product from "../../assets/Images/product.png"
import product1 from "../../assets/Images/product1.png"
import product2 from "../../assets/Images/product2.png"
import product3 from "../../assets/Images/product3.png"
import product4 from "../../assets/Images/product4.png"
import product5 from "../../assets/Images/product5.png"
import { Link } from "react-router";


function Arrive () {
    return(
        <div>
            <div className="text-center mt-5 p-2">
                <h1>New Arrivals</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odit adipisci animi facere possimus rem sapiente, </p>

                    
                        <div className="d-flex justify-content-center align-items-center mt-5 arrive-button flex-wrap">
                            <div>
                                <button className="custom-btn">Men's Fashion</button>
                            </div>
                            <div>
                                <button className="custom-btn">Women's Fashion</button>
                            </div>
                            <div>
                                <button className="custom-btn">Women Accessories</button>
                            </div>
                            <div>
                                <button className="custom-btn">Men's Accessories</button>
                            </div>
                            <div>
                                <button className="custom-btn">Discount Deals</button>
                            </div>
                                </div>
                       <div className="container mt-3">
                        <div className="row gx-1 arrivals-images">
                            <div className="col-4">
                                <img src={product} alt="" className="img-fluid" />
                                </div>
                                 <div className="col-4">
                                    <img src={product1} alt="" className="img-fluid" />
                                     </div>
                                     <div className="col-4">
                                        <img src={product2} alt="" className="img-fluid" />
                                        </div>
                                         <div className="col-4">
                                            <img src={product3} alt="" className="img-fluid" />
                                            </div>
                                            <div className="col-4">
                                                <img src={product4} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-4">
                                                    <img src={product5} alt="" className="img-fluid" />
                                                    </div>                                 
                                                     </div>
                                                     <Link to="/SignIn" className="btn btn-dark view-click">View More</Link>
                                                     </div>
         </div>
            </div>
    )
}
export default Arrive;