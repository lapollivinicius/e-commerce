import CardProduct from "../ui/CardProduct";
import type { card } from "../../types/card";


const data: card = {
  id: 1,
  title: "t-shirt technologic oversized black",
  thumb: "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: 89.99,
  comparison_price: 109.90,
  badge: "available"
}

export default function Featured() {
  return (
    <section className="section bg-outground flex w-full items-center justify-center overflow-hidden">
      <div className="container">
        <div className="h-150">
          <CardProduct data={data} />
        </div>
      </div>
    </section>
  );
}
