import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../../public/images/logo.png"; // 引入 logo 圖片

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // 檢查 localStorage 是否有 token，來判斷使用者是否已登入
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // 清除 token
        setIsAuthenticated(false);
        navigate("/"); // 回到首頁
    };

    return (
        <div id="navbar" className="w-full py-2 bg-black/40 flex items-center z-10">
            <div id="container" className="container-mid">
                <div id="row" className="row grid grid-cols-2 justify-between gap-rwd">
                    <Link to="/" id="brand" className="w-40 h-16 bg-cover-set" style={{backgroundImage: `url(${logo})`}} />
                    <ul className="gap-rwd flex items-center justify-end">
                        {["About", "Product", "Cart"].map((item) => (
                            <li key={item} className="text-center">
                                <Link
                                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                                    className="text-white text-xl hover:text-yellow-500 transition duration-300"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <li className="text-center">
                            {isAuthenticated ? (
                                <button
                                    onClick={handleLogout}
                                    className="text-white text-xl hover:text-red-500 transition duration-300 cursor-pointer"
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <Link
                                    to="/sign-in"
                                    className="text-white text-xl hover:text-yellow-500 transition duration-300"
                                >
                                    Sign In
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContext"; // 引入 AuthContext
// import { logout } from "../../service/authService"; // 引入 logout 函數

// function Navbar() {
//     const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//         try {
//             await logout();
//             setIsLoggedIn(false);
//             navigate("/");
//         } catch (err) {
//             console.error("登出失敗：", err);
//         }
//     };

//     return (
//         <div id="navbar" className="w-full py-2 bg-black/40 flex items-center z-10">
//             <div id="container" className="container-mid">
//                 <div id="row" className="row grid grid-cols-2 justify-between gap-rwd">
//                     <Link to="/" id="brand" className="w-40 h-16 bg-[url('./src/assets/images/logo.png')] bg-cover-set" />
//                     <ul className="gap-rwd flex items-center justify-end">
//                         {["About", "Product", "Cart"].map((item) => (
//                             <li key={item} className="text-center">
//                                 <Link
//                                     to={`/${item.toLowerCase().replace(" ", "-")}`}
//                                     className="text-white text-xl hover:text-yellow-500 transition duration-300"
//                                 >
//                                     {item}
//                                 </Link>
//                             </li>
//                         ))}
//                         <li className="text-center">
//                             {isLoggedIn ? (
//                                 <button
//                                     onClick={handleLogout}
//                                     className="text-white text-xl hover:text-red-500 transition duration-300 cursor-pointer"
//                                 >
//                                     Sign Out
//                                 </button>
//                             ) : (
//                                 <Link
//                                     to="/sign-in"
//                                     className="text-white text-xl hover:text-yellow-500 transition duration-300"
//                                 >
//                                     Sign In
//                                 </Link>
//                             )}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
