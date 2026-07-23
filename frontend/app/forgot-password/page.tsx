"use client";
import { useState } from "react";
import { api } from "../../lib/api";
export default function ForgotPassword() {
  const [email, setEmail] = useState(""),
    [done, setDone] = useState(false);
  return (
    <main className="form panel">
      <h1>Reset password</h1>
      {done ? (
        <p>If that email exists, a reset link has been sent.</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={() =>
              api
                .request("/auth/forgot-password", {
                  method: "POST",
                  body: JSON.stringify({ email }),
                })
                .then(() => setDone(true))
            }
          >
            Send reset link
          </button>
        </>
      )}
    </main>
  );
}
