import './App.css'
import Footer from './components/Layout/Footer'
import NavbarFixed from "./components/Layout/NavbarFixed"
import Navbar from "./components/Layout/Navbar"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // 這是用於路由的庫，還能夠讓我們使用 useLocation 判斷當前路由
import { useEffect, lazy, Suspense } from "react";
import { clearToken, setAuthHeader } from "./service/authService";
import 'ldrs/dotStream'


// lazy loading => 動態載入組件，可縮短LCP，降低bundle size
const Home = lazy(() => import('./pages/Home')); 
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));
const SignIn = lazy(() => import('./pages/SignIn'));
const ProductItem = lazy(() => import('./pages/ProductItem'));
const Event = lazy(() => import('./pages/Event'));
const About = lazy(() => import('./pages/About'));


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

  useEffect(() => {
    const EXPIRE_MS = 60 * 60 * 1000; // 一小時
    const ts = Number(localStorage.getItem('tokenSavedAt')); // 取得 token 儲存的時間戳
    const now = Date.now(); 

    // 一進頁面就檢查過期
    if (!ts || now - ts > EXPIRE_MS) { // 如果沒有時間戳或已過期
      clearToken();
    } else {
      // 排程剩餘時間後自動清除
      const timeout = setTimeout(() => { // setTimeout(callbackFunc, delayMilliseconds)：在 delay 毫秒後執行 callback 
        clearToken();
      }, EXPIRE_MS - (now - ts));

      return () => clearTimeout(timeout); // 取消上面的timeout
    }
  }, []);

  return (
    // 使用 Router 來包裹整個應用，這樣我們就可以使用路由功能了
    // Routes 用來定義路由，Route 用來定義每個路由的具體內容
    // element 用來指定當前路由對應的 Component
    // path 用來指定路由的路徑
    // Suspense 用來處理動態載入組件的 fallback，當組件還沒有載入完成時顯示 loading 的樣式
    <Router>
      <ScrollToTop />
      <DynamicNavbar />
      <Suspense fallback={<div className="w-full text-center my-25"> 
                    <l-dot-stream
                    size="60"
                    speed="2.5"
                    color="black" 
                    ></l-dot-stream>
                </div>}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
