"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
export function Nav() {
  const { user, logout } = useAuth();
  return (
    <nav className="nav">
      <Link href="/">Store</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/orders">Orders</Link>
      {user?.role === "ADMIN" && <Link href="/admin">Admin</Link>}
      <span className="spacer" />
      {user ? (
        <>
          <span>{user.fullName}</span>
          <button className="secondary" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
