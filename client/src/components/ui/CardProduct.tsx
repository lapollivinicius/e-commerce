import { ShoppingCart } from "lucide-react";
import type { card } from "../../types/card";
import Button from "./Button";

type propsCard = {
  data: card;
};

export default function CardProduct({ data }: propsCard) {
  return (
    <div className="w-70 flex flex-col gap-2">

      <div className="relative w-full h-90 overflow-hidden bg-red-500 rounded-[1em]">
        <img
          src={data.thumb}
          alt={data.title}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase">
          {data.badge}
        </span>
      </div>

      <div className="mt-3">
        <p className="font-semibold truncate">{data.title}</p>
        <div className="flex items-center gap-2">
          <p className="text-sm line-through opacity-50">
            ${data.comparison_price}
          </p>
          <p className="font-bold">${data.price}</p>
        </div>
      </div>

      <Button className="flex justify-center items-center gap-2">
        <ShoppingCart size={16} />
        ADD TO CART
      </Button>

    </div>
  );
}
