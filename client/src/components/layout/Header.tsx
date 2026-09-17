import { Link, NavLink } from "react-router-dom";
import { IoIosContrast } from "react-icons/io";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleTheme } = useTheme();

  return (
    <header className="section w-full flex justify-center items-center z-40">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          <button
            className="cursor-pointer hidden max-lg:flex"
            onClick={() => setOpen(!open)}
            role="open"
          >
            <Menu size={26} />
          </button>

          <Link
            to={"/"}
            className="tracking-tighter max-lg:translate-x-1/6 flex items-center gap-1"
          >
            <h1 className="font-serif font-black text-5xl">moedas</h1>
            <span>®</span>
          </Link>

          <nav className="flex gap-3 text-lg max-lg:hidden">
            <NavLink to={"/products"} className={"group"}>
              <p>PRODUCTS</p>
              <div
                className="h-0.5 w-full bg-background opacity-0 group-hover:opacity-100 transition-opacity
      relative -top-1"
              ></div>
            </NavLink>
            <NavLink to={"/collections"} className={"group"}>
              <p>COLLECTIONS</p>
              <div
                className="h-0.5 w-full bg-background opacity-0 group-hover:opacity-100 transition-opacity
      relative -top-1"
              ></div>
            </NavLink>
            <NavLink to={"/drops"} className={"group"}>
              <p>NEWIES</p>
              <div
                className="h-0.5 w-full bg-background opacity-0 group-hover:opacity-100 transition-opacity
      relative -top-1"
              ></div>
            </NavLink>
            <NavLink to={"/about"} className={"group flex flex-col"}>
              <p>ABOUT US</p>
              <div
                className="h-0.5 w-full bg-background opacity-0 group-hover:opacity-100 transition-opacity
      relative -top-1"
              ></div>
            </NavLink>
          </nav>

          <div className="flex gap-2 items-center">
            <Link
              to={"/login"}
              className="hover:-translate-y-1 hover:cursor-pointer transition-all duration-300"
            >
              <User size={26} />
            </Link>
            <Link
              to={"/cart"}
              className="hover:-translate-y-1 hover:cursor-pointer transition-all duration-300"
            >
              <ShoppingCart size={26} />
            </Link>
            <button
              onClick={toggleTheme}
              className="hover:-translate-y-1 hover:cursor-pointer transition-all duration-300"
            >
              <IoIosContrast size={26} />
            </button>
          </div>

          {/* MENU MOBILE */}

          <div
            className={`z-50 hidden max-lg:flex flex-col absolute w-screen h-screen top-0 -left-full opacity-0 bg-foreground text-background p-4 transition-all duration-300 ${open ? "left-0 opacity-100" : ""}`}
          >
            <div className="w-full p-4 flex justify-end">
              <button
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
                role="close"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="h-full w-full p-4 flex flex-col items-start">
              <h2 className="text-4xl font-bold mb-8">MENU</h2>
              <NavLink to={"/products"} className={"group text-2xl"}>
                <p>PRODUCTS</p>
              </NavLink>
              <NavLink to={"/collections"} className={"group text-2xl"}>
                <p>COLLECTIONS</p>
              </NavLink>
              <NavLink to={"/drops"} className={"group text-2xl"}>
                <p>NEWIES</p>
              </NavLink>
              <NavLink to={"/about"} className={"group text-2xl"}>
                <p>ABOUT US</p>
              </NavLink>
              <h2 className="text-4xl font-bold my-8">CATEGORIES</h2>
              <NavLink to={"/"} className={"group text-2xl"}>
                <p>T-SHIRT</p>
              </NavLink>
              <NavLink to={"/"} className={"group text-2xl"}>
                <p>CAP</p>
              </NavLink>
              <NavLink to={"/"} className={"group text-2xl"}>
                <p>CUP</p>
              </NavLink>
              <NavLink to={"/"} className={"group text-2xl"}>
                <p>FLIPFLOP</p>
              </NavLink>
              <h2 className="text-4xl font-bold my-8">SOCIAL</h2>
              <div className="gap-3 flex">
                <a href="">
                  <FaGithub size={36} />
                </a>
                <a href="">
                  <FaLinkedin size={36} />
                </a>
                <a href="">
                  <FaXTwitter size={36} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
