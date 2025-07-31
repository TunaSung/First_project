import { createContext, useContext, useEffect, useState } from "react";
import { saveToken, clearToken } from "../../service/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // useState
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 檢查token，載入使用者資訊，還有購物車及聊天室資料
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);

      if (!token) return;
    };
    fetchUser();
  }, []);

  // login → save token and load user/cart/msgRoom
  const login = async (token) => {
    saveToken(token);
    setIsAuthenticated(true);
  };

  // logout → clear token and reset state
  const logout = () => {
    clearToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
