import { ArrowRight } from "lucide-react";
import Anchor from "../ui/Anchor";
import CardCategory from "../ui/CardCategory";
import type { category } from "../../types/category";

const data: category = {
  id: 1,
  title: "t-shirts",
  thumb:
    "https://images.unsplash.com/photo-1717127251642-869277aa5929?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  slug: "shirts",
};

const categories: category[] = [data, data, data, data];

export default function Categories() {
  return (
    <section className="section relative flex w-full items-center justify-center overflow-hidden">
      <div className="container z-20 py-10">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-xl font-bold uppercase tracking-wider">
            CATEGORIES
          </h2>
          <div className="flex gap-5 max-lg:flex-wrap justify-center items-center">
            {categories.map((item) => (
              <CardCategory key={item.id} data={item} />
            ))}
          </div>
          <Anchor to={"/products"}>
            <p>SEE MORE </p>
            <ArrowRight size={16} />
          </Anchor>
        </div>
      </div>
    </section>
  );
}
