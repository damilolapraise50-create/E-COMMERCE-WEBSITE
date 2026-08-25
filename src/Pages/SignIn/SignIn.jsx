import "./SignIn.css";
import signinImage from "../../assets/Images/signinimage1.png";
import googleImage from "../../assets/Images/google.png"
import gmailImage from "../../assets/Images/gmail.png"
import { Link } from "react-router";

function SignIn() {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-card">

        <div className="row g-0 p-0">
          <div className="col-lg-6 p-0 login-image-section">
            <img src={signinImage} alt="Fashion" className="login-image"/>
            </div>

          <div className="col-lg-6">
            <div className="login-content">
              <h4 className="fw-bold head-lego">FASCO</h4>
              <h4 className="mt-4 head-logo">Sign In To FASCO</h4>
              <div className="d-flex gap-3 mt-4 social-login">
                <button className="btn social-btn"><img src={googleImage} alt="Google" />Sign up with Google</button>
                <button className="btn social-btn"><img src={gmailImage} alt="Gmail" />Sign up with Gmail</button>
                </div>

              <div className="text-center my-4">
                <span className="divider">OR</span>
              </div>
              <div>
              <input type="email"className="form-control mb-3 border-0 border-bottom rounded-0" placeholder="Email"/>
              <input type="password" className="form-control mb-4 border-0 border-bottom rounded-0" placeholder="Password"/>
              </div>        
             <Link to="/Dashboard" className="btn btn-dark w-100 mt-3">Sign In</Link>
             <Link to="/SignUp" className="btn btn-outline-dark w-100 mt-3">Create a New Account</Link><br />
              
              <div className="text-end mt-3 password">
             <Link to="/ForgotPassword">Forgot Password?</Link>
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

export default SignIn