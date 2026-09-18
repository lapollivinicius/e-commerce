import photo from "../../assets/banner.jpg";
import Anchor from "../ui/Anchor";
import { Cupcake } from "lucide-react";

export default function Banner() {
  return (
    <section className="section relative flex w-full items-center justify-center overflow-hidden">
      <div className="container z-20">
        <div className="h-150 flex justify-end items-center">
          <div className="flex flex-col items-end gap-5 text-background">
            <h2 className="font-black text-6xl text-right leading-13 tracking-tighter">
              ITS AN HONOR! <br />
              to dress you
            </h2>
            <p className="text-xl text-right">
              Trust us when you want to cause trouble hehe
            </p>
            <Anchor to={"/products"}>
              <Cupcake size={16} />
              <p>CATEGORIES</p>
            </Anchor>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-linear-to-l from-foreground/50 to-transparent scale-110" />

      <img
        src={photo}
        alt="t-shirt store"
        className="absolute inset-0 z-0 h-full w-full object-cover scale-110"
      />
    </section>
  );
}
