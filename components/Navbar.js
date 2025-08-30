"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `${pathname === href ? "font-bold" : "text-black"} hover:font-bold`;

  return (
    <nav className="fixed top-0 right-0 p-4 w-full z-50 flex justify-between items-center text-xl md:text-2xl">
      {/* Logo */}
      <Link href="/" className="title font-bold z-50 relative pulse-hover">
        davide colombi
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="/about" className={linkClass("/about")}>
            about
          </Link>
        </li>
        <li>
          <Link href="/contact" className={linkClass("/contact")}>
            contact
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger + expanding circle */}
      <div className="md:hidden relative z-50">
        {/* Cerchio che si espande */}
        <div
          className={`absolute top-1/2 right-1/2 w-8 h-8 rounded-full bg-white transition-all duration-500 ease-in-out transform translate-x-1/2 -translate-y-1/2 ${
            isOpen ? "scale-[80]" : "scale-0"
          }`}
        ></div>

        {/* Icona hamburger / X */}
        <div
          className="relative w-6 h-5 cursor-pointer flex flex-col justify-center gap-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-black rounded transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5 origin-center" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black rounded transform transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black rounded transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5 origin-center" : ""
            }`}
          />
        </div>

        {/* Mobile links */}
        <div
          className={`fixed inset-0 flex flex-col justify-center items-center text-2xl transition-opacity duration-500 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`${
              pathname === "/about" ? "font-bold" : "text-black"
            } hover:font-bold`}
          >
            about
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`${
              pathname === "/contact" ? "font-bold" : "text-black"
            } hover:font-bold`}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
