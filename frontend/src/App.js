import HomePage from "./landing_page/Home/HomePage";
import SignupForm from "./landing_page/signup/SignupForm";
import LoginForm from "./landing_page/signup/LoginForm";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Fotter from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
