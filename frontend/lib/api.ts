export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api/v1";
export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  stockQuantity: number;
};
export type Cart = {
  items: {
    id: number;
    productId: number;
    productName: string;
    unitPrice: number;
    quantity: number;
    lineTotal: number;
  }[];
  totalAmount: number;
};
export type Order = {
  id: number;
  status: string;
  paymentMethod: string;
  totalAmount: number;
  createdAt: string;
  paymentUrl?: string;
};
let accessToken: string | undefined;
export const setAccessToken = (t?: string) => {
  accessToken = t;
};
async function request<T>(path: string, init: RequestInit = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : { ...{} }),
      ...(init.headers ?? {}),
    },
  });
  if (!res.ok)
    throw new Error(
      (await res.json().catch(() => null))?.message ?? "Request failed",
    );
  return res.status === 204 ? (undefined as T) : (res.json() as Promise<T>);
}
export const api = {
  request,
  products: (search = "") =>
    request<{ content: Product[] }>(
      `/products?search=${encodeURIComponent(search)}`,
    ),
  cart: () => request<Cart>("/cart"),
  add: (productId: number, quantity = 1) =>
    request<Cart>("/cart/items", {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    }),
  checkout: (paymentMethod: "COD" | "VNPAY") =>
    request<Order>("/orders", {
      method: "POST",
      headers: { "Idempotency-Key": crypto.randomUUID() },
      body: JSON.stringify({ paymentMethod }),
    }),
  orders: () => request<{ content: Order[] }>("/orders"),
};
export type Category = { id: number; name: string; slug: string };
export const admin = {
  categories: () => request<Category[]>("/categories"),
  createCategory: (name: string, slug: string) =>
    request<Category>("/categories", {
      method: "POST",
      body: JSON.stringify({ name, slug }),
    }),
  deleteCategory: (id: number) =>
    request<void>(`/categories/${id}`, { method: "DELETE" }),
  createProduct: (x: any) =>
    request<Product>("/products", { method: "POST", body: JSON.stringify(x) }),
  deleteProduct: (id: number) =>
    request<void>(`/products/${id}`, { method: "DELETE" }),
  orders: () => request<{ content: Order[] }>("/orders/admin/all"),
  status: (id: number, status: string) =>
    request<Order>(`/orders/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    }),
};
