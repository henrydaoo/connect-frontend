"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api, Cart } from "../../lib/api";
export default function CartPage() {
  const [c, setC] = useState<Cart>();
  const [e, setE] = useState("");
  useEffect(() => {
    api
      .cart()
      .then(setC)
      .catch((x) => setE(x.message));
  }, []);
  if (e)
    return (
      <main>
        <p className="error">{e}</p>
        <Link href="/login">Login to view your cart</Link>
      </main>
    );
  return (
    <main>
      <h1>Your cart</h1>
      {!c ? (
        <p>Loading…</p>
      ) : (
        <div className="panel">
          {c.items.map((i) => (
            <p className="row" key={i.id}>
              <span>
                {i.productName} × {i.quantity}
              </span>
              <strong>{i.lineTotal.toLocaleString()} VND</strong>
            </p>
          ))}
          <hr />
          <p className="row">
            <strong>Total</strong>
            <strong>{c.totalAmount.toLocaleString()} VND</strong>
          </p>
          <Link href="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      )}
    </main>
  );
}
