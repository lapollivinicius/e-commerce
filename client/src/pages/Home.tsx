import Featured from "../components/layout/Featured";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import TextSlide from "../components/layout/TextSlide";

export default function Home() {

  return (
    <div className="main-content">
      <Header />
      <Hero />
      <TextSlide/>
      <Featured />
    </div>
  )

}