"use client";
import { useEffect, useState } from "react";
import { api, Product } from "../../../lib/api";
export default function ProductPage({ params }: { params: { id: string } }) {
  const [p, setP] = useState<Product>();
  const [m, setM] = useState("");
  useEffect(() => {
    api.request<Product>(`/products/${params.id}`).then(setP);
  }, [params.id]);
  if (!p) return <main>Loading…</main>;
  return (
    <main className="panel">
      <h1>{p.name}</h1>
      <p>{p.description}</p>
      <p className="price">{p.price.toLocaleString()} VND</p>
      <button
        onClick={() =>
          api
            .add(p.id)
            .then(() => setM("Added to cart"))
            .catch((e) => setM(e.message))
        }
      >
        Add to cart
      </button>
      <p>{m}</p>
    </main>
  );
}
