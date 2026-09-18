import CardProduct from "../ui/CardProduct";
import { motion } from "motion/react";
import type { card } from "../../types/card";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Anchor from "../ui/Anchor";

const data: card = {
  id: 1,
  title: "t-shirt technologic oversized black",
  thumb:
    "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: 89.99,
  comparison_price: 109.9,
  badge: "available",
};

export default function Featured() {
  const [index, setIndex] = useState(0);
  const STEP = 280 + 20; // w-70 + gap-5
  const products = [data, data, data, data, data, data];

  const next = () => {
    setIndex((current) => Math.min(current + 1, products.length - 1));
  };

  const prev = () => {
    setIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="section bg-outground flex w-full items-center justify-center overflow-hidden">
      <div className="container">
        <div className="h-180 flex flex-col justify-center items-center gap-5">
          <h2 className="text-xl font-bold uppercase tracking-wider">
            BEST SELLERS
          </h2>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{
                x: -(index * STEP),
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
              }}
              drag="x"
              dragConstraints={{
                left: -(STEP * (products.length - 1)),
                right: 0,
              }}
              dragElastic={0.05}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50 || info.velocity.x < -500) {
                  next();
                }

                if (info.offset.x > 50 || info.velocity.x > 500) {
                  prev();
                }
              }}
              style={{
                touchAction: "pan-y",
              }}
            >
              {products.map((product, i) => (
                <div key={i} className="w-70 shrink-0 select-none">
                  <CardProduct data={product} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-full flex justify-between gap-10 mt-5">
            <div className="flex gap-10">
              <button
                onClick={prev}
                disabled={index === 0}
                className="disabled:opacity-30 cursor-pointer hover:scale-95 active:scale-90"
              >
                <ArrowLeft className="text-background" />
              </button>

              <button
                onClick={next}
                disabled={index === products.length - 1}
                className="disabled:opacity-30 cursor-pointer hover:scale-95 active:scale-90"
              >
                <ArrowRight className="text-background" />
              </button>
            </div>
            <Anchor to={"/products"}>
              <p>SEE MORE</p>
              <ArrowRight size={16} />
            </Anchor>
          </div>
        </div>
      </div>
    </section>
  );
}
