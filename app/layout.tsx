import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Connect - Your Career Network",
  description: "Connecting top developers with leading tech companies worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
