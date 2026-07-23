"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api, Product } from "../lib/api";
export default function Home() {
  const [p, setP] = useState<Product[]>([]);
  const [q, setQ] = useState("");
  useEffect(() => {
    api
      .products(q)
      .then((x) => setP(x.content))
      .catch(() => {});
  }, [q]);
  return (
    <main>
      <h1>Catalog</h1>
      <input
        placeholder="Search products"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <section className="grid">
        {p.map((x) => (
          <Link className="card" href={`/products/${x.id}`} key={x.id}>
            <h3>{x.name}</h3>
            <p className="muted">{x.description}</p>
            <p className="price">{x.price.toLocaleString()} VND</p>
            <small>{x.stockQuantity} left</small>
          </Link>
        ))}
      </section>
    </main>
  );
}
