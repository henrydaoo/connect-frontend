"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "../../../lib/api";
export default function VnpayReturn() {
  const q = useSearchParams(),
    [text, setText] = useState("Verifying payment…");
  useEffect(() => {
    api
      .request<any>(`/payment/vnpay/return?${q.toString()}`)
      .then((r) =>
        setText(
          r.paymentSuccessful
            ? "Payment received; confirmation is pending."
            : "Payment was not verified.",
        ),
      )
      .catch((e) => setText(e.message));
  }, [q]);
  return (
    <main className="panel">
      <h1>VNPay result</h1>
      <p>{text}</p>
    </main>
  );
}
