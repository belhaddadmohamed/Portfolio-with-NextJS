// import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Contact from "./sections/Contact/Contact";
import Features from "./sections/Features/Features";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Portfolio from "./sections/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <hr className="w-6/7 mx-auto border-gray-300 dark:border-gray-700" />
      <Contact />
      <Footer />
    </>
  );
}
