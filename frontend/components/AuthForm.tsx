"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
export function AuthForm({ register = false }: { register?: boolean }) {
  const { login } = useAuth(),
    r = useRouter();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [fullName, setName] = useState(""),
    [error, setError] = useState("");
  return (
    <main className="form panel">
      <h1>{register ? "Create account" : "Login"}</h1>
      {register && (
        <>
          <label>Name</label>
          <input value={fullName} onChange={(e) => setName(e.target.value)} />
        </>
      )}
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          try {
            await login(email, password, register, fullName);
            r.push("/");
          } catch (e: any) {
            setError(e.message);
          }
        }}
      >
        {register ? "Register" : "Login"}
      </button>
      {error && <p className="error">{error}</p>}
    </main>
  );
}
