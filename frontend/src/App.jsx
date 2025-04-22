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
import Event from './pages/Event'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // 這是用於路由的庫，還能夠讓我們使用 useLocation 判斷當前路由
import { useEffect } from "react";
import { setAuthHeader } from "./service/authService";

// 這個函數用來根據當前路由動態渲染不同的Navbar
function DynamicNavbar() { 
  const location = useLocation();
  
  if (location.pathname === "/") {
    return <NavbarFixed />;
  }
  return <Navbar />;
}

// 路由改變時(換頁時)滾動到頁面頂部
function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    setAuthHeader(); // 應用加載時設置 Authorization 標頭
  }, []); // 僅在組件加載時運行一次

  return (
    // 使用 Router 來包裹整個應用，這樣我們就可以使用路由功能了
    // Routes 用來定義路由，Route 用來定義每個路由的具體內容
    // element 用來指定當前路由對應的 Component
    // path 用來指定路由的路徑
    <Router>
      <ScrollToTop />
      <DynamicNavbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
