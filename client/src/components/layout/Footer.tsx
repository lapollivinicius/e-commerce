import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Cadeirada from "../ui/Sign";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col justify-center mb-4">
          <Link
            to={"/"}
            className="tracking-tighter flex items-center gap-1 my-10"
          >
            <h1 className="font-serif font-black text-7xl">moedas</h1>
            <span className="text-2xl">®</span>
          </Link>
          <div className="flex justify-between items-center gap-10 max-lg:flex-col max-lg:justify-start">
            <div className="flex flex-col gap-2 text-lg w-1/4 max-lg:w-full">
              <h2 className="font-bold text-lg">WHATCOIN?</h2>
              <p>
                Moedas is a clothing brand built around bold expression, 
                modern silhouettes, and everyday pieces. Designed for 
                those who value individuality?
              </p>
              <div className="gap-3 flex mt-4">
                <a href="">
                  <FaGithub size={26} />
                </a>
                <a href="">
                  <FaLinkedin size={26} />
                </a>
                <a href="">
                  <FaXTwitter size={26} />
                </a>
              </div>
            </div>
            <div
              role="nav"
              className="flex flex-col gap-2 text-lg max-lg:w-full"
            >
              <h2 className="font-bold text-lg">MENU</h2>
              <NavLink to={"/products"} className={"hover:underline"}>
                PRODUCTS
              </NavLink>
              <NavLink to={"/collections"} className={"hover:underline"}>
                COLLECTIONS
              </NavLink>
              <NavLink to={"/drops"} className={"hover:underline"}>
                NEWIES
              </NavLink>
              <NavLink to={"/about"} className={"hover:underline"}>
                ABOUT US
              </NavLink>
            </div>
            <div
              role="nav"
              className="flex flex-col gap-2 text-lg max-lg:w-full"
            >
              <h2 className="font-bold text-lg">CATEGORIES</h2>
              <NavLink
                to={"/products?category=shirts"}
                className={"hover:underline"}
              >
                T-SHITS
              </NavLink>
              <NavLink
                to={"/products?category=caps"}
                className={"hover:underline"}
              >
                CAPS
              </NavLink>
              <NavLink
                to={"/products?category=cups"}
                className={"hover:underline"}
              >
                CUPS
              </NavLink>
              <NavLink
                to={"/products?category=pants"}
                className={"hover:underline"}
              >
                PANTS
              </NavLink>
            </div>
            <div
              role="nav"
              className="flex flex-col gap-2 text-lg max-lg:w-full"
            >
              <h2 className="font-bold text-lg">SERIOUS</h2>
              <NavLink to={"/terms"} className={"hover:underline"}>
                TERMS
              </NavLink>
              <NavLink to={"/terms#policy"} className={"hover:underline"}>
                POLICY
              </NavLink>
              <NavLink to={"/terms#delivery"} className={"hover:underline"}>
                DELIVERY
              </NavLink>
              <NavLink to={"/about"} className={"hover:underline"}>
                ABOUT US
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-between max-sm:flex-col gap-1 max-sm:items-center py-4 border-t border-outground/50">
          <p className="text-start text-sm opacity-50">
            © 2026 Moedas. All rights reserved.
          </p>

          <p className="flex gap-1 text-sm opacity-50">
            Built by
            <Cadeirada size={20} />
            <a
              href="https://cadeiradaestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-black text-foreground"
            >
              estúdio cadeiradas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
