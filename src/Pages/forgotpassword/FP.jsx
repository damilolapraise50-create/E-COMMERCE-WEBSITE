import "./FP.css";
import signinImage1 from "../../assets/Images/signinimage1.png";
import { Link } from "react-router";
function ForgotPassword() {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="container login-card p-0">

        <div className="row g-0 p-0">
          <div className="col-lg-6 p-0 login-image-section">
            <img src={signinImage1} alt="Fashion" className="login-image"/>
            </div>

          <div className="col-lg-6">
            <div className="login-content">
              <h1 className="brand">FASCO</h1><br /><br /><br /><br />
              <h4 className="mt-4">Forgot Password</h4><br />

             <div className="row">

  <div className="col-md-6">
    <input type="text" className="form-control mb-4 border-0 border-bottom rounded-0"placeholder="First Name"/>
  </div>

  <div className="col-md-6">
    <input type="text" className="form-control mb-4 border-0 border-bottom rounded-0" placeholder="Last Name"/>
  </div>

  <div className="col-md-6">
    <input type="email" className="form-control mb-4 border-0 border-bottom rounded-0" placeholder="Email Address" />
  </div>

  <div className="col-md-6">
    <input type="tel" className="form-control mb-4 border-0 border-bottom rounded-0" placeholder="Phone Number" />
  </div>

</div>
              
               <Link to="/confirmationcode" className="btn btn-dark w-100 mt-3">Send Confirmation Code</Link><br />
              <div className="text-center ">
               <p>Already have an account?<Link to="/SignIn">Log in</Link></p>
              </div>
            
              <p className="text-end small mt-5">
                FASCO Terms & Conditions
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;