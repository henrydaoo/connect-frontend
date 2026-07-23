"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";
export default function Checkout() {
  const router = useRouter();
  const [m, setM] = useState<"COD" | "VNPAY">("COD"),
    [e, setE] = useState("");
  return (
    <main className="form panel">
      <h1>Checkout</h1>
      <label>Payment method</label>
      <select
        value={m}
        onChange={(x) => setM(x.target.value as "COD" | "VNPAY")}
      >
        <option value="COD">Cash on delivery</option>
        <option value="VNPAY">VNPay</option>
      </select>
      <button
        onClick={async () => {
          try {
            const o = await api.checkout(m);
            if (o.paymentUrl) window.location.assign(o.paymentUrl);
            else router.push("/orders");
          } catch (x: any) {
            setE(x.message);
          }
        }}
      >
        Place order
      </button>
      {e && <p className="error">{e}</p>}
    </main>
  );
}
