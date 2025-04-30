// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { slide as Menu } from 'react-burger-menu';
// import { Sling as Hamburger } from 'hamburger-react';

// function Navbar() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // 檢查 localStorage 是否有 token，來判斷使用者是否已登入
//         const token = localStorage.getItem("token");
//         setIsAuthenticated(!!token);
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem("token"); // 清除 token
//         setIsAuthenticated(false);
//         navigate("/"); // 回到首頁
//     };

//     return (
//         <div id="navbar" className="w-full py-2 bg-black/40 flex items-center z-10">
//             <div id="container" className="container-mid">
//                 <div id="row" className="row grid grid-cols-2 justify-between gap-rwd">
//                     <Link to="/" id="brand" className="w-40 h-16 bg-[url('../../../images/logo.png')] bg-cover-set" />
//                     <div className="fixed top-4 right-8 z-50 md:hidden">
//                         <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color="#333" />
//                     </div>
//                     <Menu
//                         right
//                         isOpen={isOpen}
//                         onStateChange={state => setIsOpen(state.isOpen)}
//                         customBurgerIcon={false}
//                         customCrossIcon={false}
//                         styles={{
//                         bmBurgerButton: { display: 'none' },
//                         bmMenuWrap: {
//                             position: 'fixed',
//                             top: '4rem',
//                             right: '1rem',
//                             width: '12rem'
//                         },
//                         bmMenu: {
//                             background: '#111',
//                             padding: '1rem',
//                             borderRadius: '0.5rem'
//                         },
//                         bmOverlay: { background: 'transparent' }
//                         }}
//                     >
//                         <ul className="gap-rwd flex items-center justify-end">
//                             {["About", "Product", "Cart"].map((item) => (
//                                 <li key={item} className="text-center">
//                                     <Link
//                                         to={`/${item.toLowerCase().replace(" ", "-")}`}
//                                         className="text-white text-xl hover:text-yellow-500 transition duration-300"
//                                     >
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                             <li className="text-center">
//                                 {isAuthenticated ? (
//                                     <button
//                                         onClick={handleLogout}
//                                         className="text-white text-xl hover:text-red-500 transition duration-300 cursor-pointer"
//                                     >
//                                         Sign Out
//                                     </button>
//                                 ) : (
//                                     <Link
//                                         to="/sign-in"
//                                         className="text-white text-xl hover:text-yellow-500 transition duration-300"
//                                     >
//                                         Sign In
//                                     </Link>
//                                 )}
//                             </li>
//                         </ul>
//                     </Menu>
//                     <ul className="gap-rwd flex items-center justify-end max-md:hidden">
//                             {["About", "Product", "Cart"].map((item) => (
//                                 <li key={item} className="text-center">
//                                     <Link
//                                         to={`/${item.toLowerCase().replace(" ", "-")}`}
//                                         className="text-white text-xl hover:text-yellow-500 transition duration-300"
//                                     >
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                             <li className="text-center">
//                                 {isAuthenticated ? (
//                                     <button
//                                         onClick={handleLogout}
//                                         className="text-white text-xl hover:text-red-500 transition duration-300 cursor-pointer"
//                                     >
//                                         Sign Out
//                                     </button>
//                                 ) : (
//                                     <Link
//                                         to="/sign-in"
//                                         className="text-white text-xl hover:text-yellow-500 transition duration-300"
//                                     >
//                                         Sign In
//                                     </Link>
//                                 )}
//                             </li>
//                         </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { reveal as Menu } from 'react-burger-menu';
import { Sling as Hamburger } from 'hamburger-react';

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/");
        setIsOpen(false);
    };

    const navItems = ["About", "Product", "Cart"];

    return (
        <div id="navbar" className="w-full py-2 bg-black/40 flex items-center z-10">
            <div id="container" className="container-mid flex items-center justify-between">
                <Link to="/" id="brand" className="w-40 h-16 bg-[url('../../../images/logo.png')] bg-cover-set"/>

                {/* 漢堡選單：小於 md 顯示 */}
                <div className="md:hidden">
                    <div className="fixed top-4 right-8 z-50">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} duration={0.5}  color="#fff" />
                    </div>
                    <Menu
                        isOpen={isOpen}
                        onStateChange={(state) => {setIsOpen(state.isOpen)}} 
                        customBurgerIcon={false}
                        customCrossIcon={false}
                        styles={{
                            bmBurgerButton: { display: 'none' },
                            bmBurgerBarsHover: { background: '#000' },
                            bmMenuWrap: {
                                transition: 'transform 0s ease-in-out',
                                position: 'fixed',
                                top: '4rem',
                                right: '1rem',
                                width: 'auto'
                            },
                            bmMenu: {
                                background: '#A3E8AA',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                height: 'auto',
                                transition: 'none'
                            },
                            bmOverlay: {
                              transition: 'opacity 0s ease-in-out',
                              background: 'transparent'
                            }
                        }}
                    >
                        <ul className="space-y-4">
                            {navItems.map(item => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`}
                                        className="text-white text-xl hover:text-yellow-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                {isAuthenticated ? (
                                    <button
                                        onClick={handleLogout}
                                        className="text-white text-xl hover:text-red-500 transition"
                                    >
                                        Sign Out
                                    </button>
                                ) : (
                                    <Link
                                        to="/sign-in"
                                        className="text-white text-xl hover:text-yellow-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign In
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </Menu>
                </div>

                {/* Inline 選單：md 及以上顯示 */}
                <ul className="hidden md:flex items-center space-x-6">
                    {navItems.map(item => (
                        <li key={item}>
                            <Link
                                to={`/${item.toLowerCase()}`}
                                className="text-white text-xl hover:text-yellow-500 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                    <li>
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="text-white text-xl hover:text-red-500 transition"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                to="/sign-in"
                                className="text-white text-xl hover:text-yellow-500 transition"
                            >
                                Sign In
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
