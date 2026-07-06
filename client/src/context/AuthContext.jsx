import { createContext, useContext, useState, useEffect, useCallback } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount, check if a valid session cookie exists
  useEffect(() => {
    const bootstrap = async () => {
      try {
        const cachedUser = localStorage.getItem("finassist_user");
        if (cachedUser) setUser(JSON.parse(cachedUser));

        const { data } = await api.get("/auth/me");
        setUser(data.data.user);
        localStorage.setItem("finassist_user", JSON.stringify(data.data.user));
      } catch (err) {
        setUser(null);
        localStorage.removeItem("finassist_user");
      } finally {
        setIsLoading(false);
      }
    };
    bootstrap();
  }, []);

  const login = useCallback(async (credentials) => {
    const { data } = await api.post("/auth/login", credentials);
    setUser(data.data.user);
    localStorage.setItem("finassist_user", JSON.stringify(data.data.user));
    return data.data.user;
  }, []);

  const register = useCallback(async (payload) => {
    const { data } = await api.post("/auth/register", payload);
    setUser(data.data.user);
    localStorage.setItem("finassist_user", JSON.stringify(data.data.user));
    return data.data.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setUser(null);
      localStorage.removeItem("finassist_user");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated: !!user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
