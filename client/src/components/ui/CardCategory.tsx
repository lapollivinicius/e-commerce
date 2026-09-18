import { Link } from "react-router-dom";
import type { category } from "../../types/category";

type CategoryProps = {
  data: category;
};

export default function CardCategory({ data }: CategoryProps) {
  return (
    <Link
      to={`/products?category=${data.slug}`}
      className="relative h-70 min-w-50 w-70 overflow-hidden rounded-2xl bg-cover bg-center object-top"
      style={{ backgroundImage: `url(${data.thumb})` }}
    >
      <div className="absolute inset-x-0 bottom-0 h-2/3 backdrop-blur-md mask-[linear-gradient(to_top,black_0%,black_35%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
      <h2 className="absolute bottom-5 left-5 z-10 text-2xl font-black text-white uppercase">
        {data.title}
      </h2>
    </Link>
  );
}
