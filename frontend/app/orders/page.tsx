"use client";
import { useEffect, useState } from "react";
import { api, Order } from "../../lib/api";
export default function Orders() {
  const [o, setO] = useState<Order[]>([]),
    [e, setE] = useState("");
  useEffect(() => {
    api
      .orders()
      .then((x) => setO(x.content))
      .catch((x) => setE(x.message));
  }, []);
  return (
    <main>
      <h1>Order history</h1>
      {e && <p className="error">{e}</p>}
      {o.map((x) => (
        <article className="card" key={x.id}>
          <div className="row">
            <strong>Order #{x.id}</strong>
            <span>{x.status}</span>
          </div>
          <p>
            {x.paymentMethod} · {x.totalAmount.toLocaleString()} VND
          </p>
          <small>{new Date(x.createdAt).toLocaleString()}</small>
        </article>
      ))}
    </main>
  );
}
