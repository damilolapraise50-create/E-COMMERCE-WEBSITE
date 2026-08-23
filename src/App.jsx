import { Routes, Route } from "react-router";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Pages/forgotpassword/FP";
import ConfirmationCode from "./Pages/confirmationcode/code";
import NewPassword from "./Pages/NewPasword/New";
import HomePage from "./Pages/HomePage/Home";
import Dashboard from "./Pages/Dashboard/Dash"
import Product from "./Pages/Product/Product"
import Cart from "./Pages/cart/cart"
import Checkout from "./Pages/Checkout/Checkout"
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/confirmationcode" element={<ConfirmationCode />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;