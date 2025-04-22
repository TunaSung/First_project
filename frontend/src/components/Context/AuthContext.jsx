// import { createContext, useState, useEffect } from 'react';

// // 創建一個 AuthContext
// export const AuthContext = createContext();

// // AuthProvider 用來包住你的應用，提供共享的狀態
// function AuthProvider ({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 用來追蹤登入狀態
//   const [isLoading, setIsLoading] = useState(true); // 載入狀態，避免在讀取 token 時閃爍

//   useEffect(() => {
//     // 嘗試從 localStorage 中讀取 token
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//     setIsLoading(false);
//   }, []);

//   // 提供的 context 值
//   const value = {
//     isLoggedIn,
//     setIsLoggedIn,
//     isLoading,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider

import { createContext, useState, useEffect } from 'react';

// 創建一個 AuthContext
export const AuthContext = createContext();

// AuthProvider 用來包住你的應用，提供共享的狀態
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 用來追蹤登入狀態
  const [isLoading, setIsLoading] = useState(true); // 載入狀態，避免在讀取 token 時閃爍

  useEffect(() => {
    // 嘗試從 localStorage 中讀取 token
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  // 提供的 context 值
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
