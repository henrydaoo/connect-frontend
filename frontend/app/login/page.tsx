import Link from "next/link";
import { AuthForm } from "../../components/AuthForm";
export default function Login() {
  return (
    <>
      <AuthForm />
      <p style={{ textAlign: "center" }}>
        <Link href="/forgot-password">Forgot password?</Link>
      </p>
    </>
  );
}
