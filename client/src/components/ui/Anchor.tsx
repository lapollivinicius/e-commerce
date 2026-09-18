import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
}

export default function Anchor({
  children,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      className={`bg-primary text-background text-center font-black p-2 px-4 rounded-[1em] flex gap-2 items-center cursor-pointer hover:text-foreground transition-all duration-300 ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
