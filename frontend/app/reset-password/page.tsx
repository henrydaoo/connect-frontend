"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "../../lib/api";
export default function ResetPassword() {
  const token = useSearchParams().get("token") ?? "",
    router = useRouter(),
    [password, setPassword] = useState(""),
    [message, setMessage] = useState("");
  return (
    <main className="form panel">
      <h1>Choose a new password</h1>
      <input
        type="password"
        minLength={8}
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() =>
          api
            .request("/auth/reset-password", {
              method: "POST",
              body: JSON.stringify({ token, newPassword: password }),
            })
            .then(() => {
              setMessage("Password updated.");
              setTimeout(() => router.push("/login"), 800);
            })
            .catch((e) => setMessage(e.message))
        }
      >
        Update password
      </button>
      <p>{message}</p>
    </main>
  );
}
