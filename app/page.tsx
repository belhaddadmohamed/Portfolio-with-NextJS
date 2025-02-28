// import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
