import { useState, useEffect } from "react";
import "./IG.css"
import IG1 from "../../assets/Images/IG1.png"
import IG2 from "../../assets/Images/IG2.png"
import IG3 from "../../assets/Images/IG3.png"
import IG4 from "../../assets/Images/IG4.png"
import IG5 from "../../assets/Images/IG5.png"
import IG6 from "../../assets/Images/IG6.png"
import model4 from "../../assets/Images/model4.png"


function IG () {
return (
       <div className="socials">
        <div className="text-center mt-5 media">
        <h3 className="media">Follow Us On Instagram</h3>
        <p className="follow">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
            Veniam quisquam repellat sint delectus praesentium animi pariatur</p>
       </div> 

       <div className="Ig-photos">
         <div className="col-lg-6 high-pic">
              <img src={IG1}alt=""className="img-fluid "/>
            </div>
             <div className="col-lg-6">
                  <img src={IG2}alt=""className="img-fluid "/>
                </div>
                 <div className="col-lg-6 high-pic ">
                      <img src={IG3}alt=""className="img-fluid "/>
                    </div>
                     <div className="col-lg-6 ">
                          <img src={IG5}alt=""className="img-fluid "/>
                        </div>
                         <div className="col-lg-6 high-pic">
                              <img src={IG4}alt=""className="img-fluid "/>
                            </div>
                             <div className="col-lg-6">
                                  <img src={model4}alt=""className="img-fluid "/>
                                </div>
                                 <div className="col-lg-6 high-pic">
                                      <img src={IG6}alt=""className="img-fluid "/>
                                    </div>
       </div>
        </div>

    
    )
}
    

export default IG
