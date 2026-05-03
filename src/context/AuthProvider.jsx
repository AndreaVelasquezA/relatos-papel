import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import mockUser from "../data/user";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const savedUser = localStorage.getItem(USER_KEY);

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // LOGIN SIMULADO
  const login = (email, password) => {
    if (email === mockUser.email && password === "123456") {
      const fakeToken = "token_" + Date.now();

      setUser(mockUser);

      localStorage.setItem(TOKEN_KEY, fakeToken);
      localStorage.setItem(USER_KEY, JSON.stringify(mockUser));

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
