"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/api";
import axios from "axios";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const authorize = async (jwt) => {
    if (!jwt) {
      setLoggedIn(null);
      setToken(null);
      setUserData(null);
      return false;
    }
    try {
      const response = await api.get("/user/profile");

      setUserData(response.data);
      setToken(jwt);
      setLoggedIn(true);
      return true;
    } catch (error) {
      if (error.response.status === 401) setLoggedIn(null);
      setToken(null);
      setUserData(null);
      router.push("/auth/login");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    setLoggedIn(false);
    setUserData(null);
    router.push("/");
    return;
  };

  useEffect(() => {
    const jwt = localStorage.getItem("authToken");
    authorize(jwt);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        loggedIn,
        setLoggedIn,
        authorize,
        logout,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("context must be used inside a provider");
  }
  return context;
}
export default AuthContext;
