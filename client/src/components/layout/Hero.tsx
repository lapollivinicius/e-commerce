import { Rabbit } from "lucide-react";
import photo from "../../assets/hero.jpg";
import Anchor from "../ui/Anchor";

export default function Hero() {
  return (
    <section className="section relative flex w-full items-center justify-center overflow-hidden">
      <div className="container z-20">
        <div className="h-150 flex justify-start items-center">
          <div className="flex flex-col items-start gap-5 text-background">
            <h2 className="font-black text-6xl leading-13 tracking-tighter">
              YEAHHHHHH <br />
              more one drop
            </h2>
            <p className="text-xl">
              Inspired by the last Paris House Concert®{" "}
            </p>
            <Anchor to={"/drops"}>
              <Rabbit size={20} />
              <p>SEE MORE</p>
            </Anchor>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-linear-to-r from-foreground to-transparent scale-110" />

      <img
        src={photo}
        alt="t-shirt store"
        className="absolute inset-0 z-0 h-full w-full object-cover scale-110"
      />
    </section>
  );
}
