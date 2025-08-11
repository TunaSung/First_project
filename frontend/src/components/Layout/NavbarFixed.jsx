import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { reveal as Menu } from 'react-burger-menu';
import { Sling as Hamburger } from 'hamburger-react';
import { useAuth } from '../Context/authContext'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
        setIsOpen(false);
    };

    const navItems = ["About", "Product", "Cart"];

    return (
        <div id="navbar" className="fixed top-0 left-0 w-full py-2 bg-[#06202B] flex items-center z-10">
            <div id="container" className="container-mid flex items-center justify-between">
                <Link to="/" id="brand" className="w-40 h-16 max-xs:scale-75 bg-[url(/images/logo.png)] bg-cover-set"/>

                {/* 漢堡選單：小於 md 顯示 */}
                <div className="md:hidden">
                    <div className=" right-8 z-50">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} duration={0.5} color="#F5EEDD" />
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
                                background: '#000',
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
                        <ul className="space-y-4 text-white">
                            {navItems.map(item => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`}
                                        className="text-xl hover:text-[#F5EEDD] transition-all duration-200"
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
                                        className="text-xl cursor-pointer hover:text-red-500 transition-all duration-200"
                                    >
                                        Sign Out
                                    </button>
                                ) : (
                                    <Link
                                        to="/sign-in"
                                        className="text-xl hover:text-[#F5EEDD] transition-all duration-200"
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
                                className="text-white text-xl hover:text-[#e0c074] transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                    <li>
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="text-white text-xl hover:text-red-500 cursor-pointer transition"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                to="/sign-in"
                                className="text-white text-xl hover:text-[#e0c074] transition"
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
