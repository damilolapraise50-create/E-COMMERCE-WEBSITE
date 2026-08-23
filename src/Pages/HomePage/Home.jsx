import "./Home.css"
import { Link } from "react-router";
import sitman from "../../assets/Images/sitman.png"
import ladies from "../../assets/Images/ladies.png"
import ladies1 from "../../assets/Images/ladies1.png"
import sitman2 from "../../assets/Images/sitman2.png"
import scroll from "../../assets/Icons/scroll.png"
import cart from "../../assets/Icons/cart.png"
import logos from "../../assets/Images/logos.png"
import Deals from "../../components/Deals/Deals";
import Arrive from "../../components/Arrivals/Arrive";
import product5 from "../../assets/Images/product5.png"
import Broski2 from "../../assets/Images/Broski2.png"
import features from "../../assets/Images/features.png"
import IG from "../../components/IG Follow/IG";
import Test from "../../components/TestFoot/Test";


function Home (){
    return(
      <section className="FirstPage">

 <div className="container-fluid">
<nav className="navbar navbar-expand-lg Header">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FASCO</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarMenu" >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarMenu">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Deals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Packages</a>
        </li>
        <li className="nav-item">
          <Link to="/SignIn" className="nav-link">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link to="/SignUp" className="nav-link">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* Ultimate Images */}
<div className="container mt-5">
  <div className="row g-3 align-items-start">
    <div className="col-lg-4">
  <div className="side-image">
    <img src={sitman} className="img-fluid w-100" alt="" />
</div>
    </div>


     <div className="col-lg-4 mx-auto ladies-logo">
  <img src={ladies} className="img-fluid w-100 rounded" alt="" />

  <div className="hero-text">
    <h1>ULTIMATE</h1>
    <h2>SALE</h2>
    <p>NEW COLLECTION</p>
    <Link to="/SignIn" className="btn btn-dark w-75">SHOP NOW</Link>
  </div>

  <img src={ladies1} className="img-fluid w-100 rounded" alt="" />
</div>
<div className="col-lg-4">
  <div className="side-image">
    <img src={sitman2} className="img-fluid w-100" alt="" />
  </div>
  <div className="icon-image">
    <img src={scroll} className="img-fluid w-100" alt="" />
  </div>
   <div className="cart-image">
     <img src={cart} className="img-fluid w-100" alt="" />
  </div>
</div>
    </div>
<div className="logos-image">
     <img src={logos} className="img-fluid w-100" alt="" />
  </div>
  </div>

  <Deals/>
  <Arrive/>
  <div>
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
<Test />
  
    </div>
      </section>
       
       
    )
}

export default Home