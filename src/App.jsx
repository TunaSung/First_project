import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Product from './pages/Product'
import ProductItem from './pages/ProductItem'
import Cart from './pages/Cart'
import Footer from './components/Layout/Footer'
import NavbarFixed from "./components/Layout/NavbarFixed"
import Navbar from "./components/Layout/Navbar"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Event from './pages/Event'


function DynamicNavbar() {
  const location = useLocation();
  
  if (location.pathname === "/") {
    return <NavbarFixed />;
  }
  return <Navbar />;
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router> 
    <ScrollToTop />
    <DynamicNavbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-item" element={<ProductItem />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/event" element={<Event />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
