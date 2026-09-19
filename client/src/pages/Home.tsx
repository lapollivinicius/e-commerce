import { useEffect, useState } from "react";
import Banner from "../components/layout/Banner";
import Categories from "../components/layout/Categories";
import Featured from "../components/layout/Featured";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Newsletter from "../components/layout/Newsletter";
import TextSlide from "../components/layout/TextSlide";
import Footer from "../components/layout/Footer";

export default function Home() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedHeader(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-content">
      <div
        className={`
          fixed top-0 left-0 z-50 w-full p-4
          transition-all duration-300
          ${
            showFixedHeader
              ? "translate-y-0 opacity-90"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <Header />
      </div>

      <Header />
      <Hero />
      <TextSlide />
      <Featured />
      <Banner />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}
