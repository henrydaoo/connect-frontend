"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { admin, api, Category, Order, Product } from "../../lib/api";
export default function Admin() {
  const { user } = useAuth();
  const [c, setC] = useState<Category[]>([]),
    [p, setP] = useState<Product[]>([]),
    [o, setO] = useState<Order[]>([]),
    [msg, setMsg] = useState("");
  const [name, setName] = useState(""),
    [slug, setSlug] = useState(""),
    [pn, setPn] = useState(""),
    [price, setPrice] = useState(""),
    [stock, setStock] = useState(""),
    [cat, setCat] = useState("");
  const load = () => {
    admin.categories().then(setC);
    api.products().then((x) => setP(x.content));
    admin
      .orders()
      .then((x) => setO(x.content))
      .catch((e) => setMsg(e.message));
  };
  useEffect(load, []);
  if (!user)
    return <main className="panel">Please log in as an administrator.</main>;
  if (user.role !== "ADMIN")
    return <main className="panel">Admin access is required.</main>;
  return (
    <main>
      <h1>Admin dashboard</h1>
      {msg && <p className="error">{msg}</p>}
      <section className="grid">
        <div className="panel">
          <h2>Categories</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <button
            onClick={() =>
              admin
                .createCategory(name, slug)
                .then(() => {
                  setName("");
                  setSlug("");
                  load();
                })
                .catch((e) => setMsg(e.message))
            }
          >
            Add category
          </button>
          {c.map((x) => (
            <p className="row" key={x.id}>
              {x.name}
              <button
                className="secondary"
                onClick={() =>
                  admin
                    .deleteCategory(x.id)
                    .then(load)
                    .catch((e) => setMsg(e.message))
                }
              >
                Delete
              </button>
            </p>
          ))}
        </div>
        <div className="panel">
          <h2>New product</h2>
          <input
            placeholder="Name"
            value={pn}
            onChange={(e) => setPn(e.target.value)}
          />
          <input
            placeholder="Price (VND)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value="">Category</option>
            {c.map((x) => (
              <option value={x.id} key={x.id}>
                {x.name}
              </option>
            ))}
          </select>
          <button
            onClick={() =>
              admin
                .createProduct({
                  name: pn,
                  price: Number(price),
                  stockQuantity: Number(stock),
                  categoryId: Number(cat),
                })
                .then(() => {
                  setPn("");
                  setPrice("");
                  setStock("");
                  load();
                })
                .catch((e) => setMsg(e.message))
            }
          >
            Create product
          </button>
        </div>
      </section>
      <section className="panel">
        <h2>Products</h2>
        {p.map((x) => (
          <p className="row" key={x.id}>
            <span>
              {x.name} — {x.stockQuantity} in stock
            </span>
            <button
              className="secondary"
              onClick={() =>
                admin
                  .deleteProduct(x.id)
                  .then(load)
                  .catch((e) => setMsg(e.message))
              }
            >
              Deactivate
            </button>
          </p>
        ))}
      </section>
      <section className="panel">
        <h2>Orders</h2>
        {o.map((x) => (
          <p className="row" key={x.id}>
            <span>
              #{x.id} · {x.totalAmount.toLocaleString()} VND · {x.status}
            </span>
            <select
              value={x.status}
              onChange={(e) =>
                admin
                  .status(x.id, e.target.value)
                  .then(load)
                  .catch((z) => setMsg(z.message))
              }
            >
              <option value="PENDING">PENDING</option>
              <option value="PAID">PAID</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </p>
        ))}
      </section>
    </main>
  );
}
