"use client";
import { createContext, useContext, useState } from "react";
import { API_URL, setAccessToken } from "../lib/api";
type User = { id: number; email: string; fullName: string; role: string };
const C = createContext<any>(null);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const login = async (
    email: string,
    password: string,
    register = false,
    fullName = "",
  ) => {
    const r = await fetch(
      `${API_URL}/auth/${register ? "register" : "login"}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          register ? { email, password, fullName } : { email, password },
        ),
      },
    );
    if (!r.ok) throw new Error((await r.json()).message);
    const d = await r.json();
    setAccessToken(d.accessToken);
    setUser(d.user);
  };
  const logout = () => {
    setAccessToken();
    setUser(undefined);
  };
  return <C.Provider value={{ user, login, logout }}>{children}</C.Provider>;
}
export const useAuth = () => useContext(C);
