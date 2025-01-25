"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";
import "@/../styles/globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.includes("/admin");
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.svg" />
        </head>
        <body className="bg-[#2D2E32] overflow-x-hidden min-h-screen flex flex-col">
          {!isAdminPage && <Header />}
          <main className="flex-grow">{children}</main>
          {!isAdminPage && <Footer />}
        </body>
      </html>
    </>
  );
}
