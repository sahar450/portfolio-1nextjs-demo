import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
