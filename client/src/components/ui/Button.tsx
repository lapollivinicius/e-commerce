import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, onClick, className, type }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary text-background font-black p-2 px-4 rounded-[1em] cursor-pointer hover:text-foreground transition-all duration-300`}
      type={type}
    >
      {children}
    </button>
  );
}
