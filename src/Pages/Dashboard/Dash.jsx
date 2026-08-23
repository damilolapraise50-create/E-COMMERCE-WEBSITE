import "./Dash.css"
import { Link, useNavigate } from "react-router";
import dash1 from "../../assets/Images/dash1.png"
import dash2 from "../../assets/Images/dash2.png"
import dash3 from "../../assets/Images/dash3.png"
import dash4 from "../../assets/Images/dash4.png"
import dash5 from "../../assets/Images/dash5.png"
import dash6 from "../../assets/Images/dash6.png"
import dash7 from "../../assets/Images/dash7.png"
import dash8 from "../../assets/Images/dash8.png"
import dash9 from "../../assets/Images/dash9.png"
import Filter from "../../components/Filters/Filter"

function Dash() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the user's login information
    localStorage.removeItem("isLoggedIn");
    // Go back to the homepage
    navigate("/");
  };

  return (
    <div className="top-head">
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          {/* Logo */}
          <Link to="/"className="navbar-brand"style={{fontFamily: "serif",fontSize: "22px",fontWeight: "500",}} >
            FASCO</Link>

          {/* Mobile button */}
          <button className="navbar-toggler"type="button" data-bs-toggle="collapse"data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto gap-lg-4">
             
              <li className="nav-item">
                <strong><Link className="nav-link" to="/Dashboard">SHOP</Link></strong>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Product"> Products </Link>
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

      {/* Page title */}
      <div className="text-center py-4">
        <h2 className="mb-1">Fashion</h2>
        <strong>
          <small className="text-muted">
          Home &nbsp;›&nbsp; Fashion
        </small>
        </strong>
      </div>
<Filter/>
</div>
  );
}

export default Dash;