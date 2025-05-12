import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Landing from "@/components/landing/Landing";
import About from "@/components/About/About";
import Working from "@/components/workingprocess/Working";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
     
      <Landing></Landing>
      <About></About>
      <Working></Working>
      

    </>
  );
}
