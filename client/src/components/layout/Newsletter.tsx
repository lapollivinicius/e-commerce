import { Send } from "lucide-react";
import Button from "../ui/Button";

export default function Newsletter() {
  return (
    <section className="section relative flex w-full items-center justify-center overflow-hidden">
      <div className="container z-20">
        <div className="py-10 flex flex-col justify-center items-center gap-10">
          <h2 className="font-black text-5xl text-center leading-13 tracking-tighter">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <form action="" className="flex gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="focus:outline-0 focus:border-background border bg-outground border-foreground rounded-2xl p-2"
            />
            <Button type="submit" className="uppercase flex items-center gap-2">
              Subscribe
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
