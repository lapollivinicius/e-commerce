import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-background font-black p-2 px-4 rounded-[1em] flex gap-2 items-center cursor-pointer hover:text-foreground transition-all duration-300"
    >
      {children}
    </button>
  );
}