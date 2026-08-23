import "./SignUp.css";
import signUpImage2 from "../../assets/Images/signupImage2.svg";
import googleImage from "../../assets/Images/google.png"
import gmailImage from "../../assets/Images/gmail.png"
import { Link } from "react-router";
function SignUp() {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="container login-card p-0">

        <div className="row g-0 p-0">
          <div className="col-lg-6 p-0 login-image-section">
            <img src={signUpImage2} alt="Fashion" className="login-image"/>
            </div>

          <div className="col-lg-6">
            <div className="login-content">
              <h1 className="brand head-logo">FASCO</h1>
              <h4 className="mt-4 head-lego">Create Account</h4>
              <div className="d-flex gap-3 mt-4 social-login">
                <button className="btn social-btn"><img src={googleImage} alt="Google" />Sign up with Google</button>
                <button className="btn social-btn"><img src={gmailImage} alt="Gmail" />Sign up with Gmail</button>
                </div>

              <div className="text-center my-4">
                <span className="divider">OR</span>
              </div>
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

  <div className="col-md-6">
    <input type="password"className="form-control mb-4 border-0 border-bottom rounded-0"placeholder="Password"/>
  </div>

  <div className="col-md-6">
    <input type="password" className="form-control mb-4 border-0 border-bottom rounded-0" placeholder="Confirm Password" />
  </div>

</div>
              
              <Link to="/Dashboard" className="btn btn-dark w-100 mt-3">Create Account</Link>

              <div className="text-center">
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

export default SignUp