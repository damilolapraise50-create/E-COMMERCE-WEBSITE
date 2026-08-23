import "./New.css";
import signinImage from "../../assets/Images/signinimage1.png";
import { Link } from "react-router";

function NewPassword() {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="container login-card p-0">

        <div className="row g-0 p-0">
          <div className="col-lg-6 p-0 login-image-section">
            <img src={signinImage} alt="Fashion" className="login-image"/>
            </div>

          <div className="col-lg-6">
            <div className="login-content">
              <h1 className="brand">FASCO</h1><br /><br /><br /><br />
              <h4 className="mt-4">Enter Your New Password</h4><br />
    
            
              <div>
                <input type="confirmation code"className="form-control mb-3 border-0 border-bottom rounded-0" placeholder="New Password"/>
                <input type="confirmation code"className="form-control mb-3 border-0 border-bottom rounded-0" placeholder="Confirmation Password"/>
                </div>
    
              
              <Link to="/SignIn" className="btn btn-primary w-100 shadow p-2">Submit</Link>

              <Link to="/SignIn">Back to Sign In</Link>
             
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

export default NewPassword