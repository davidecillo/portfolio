"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `${pathname === href ? "font-bold" : "text-gray-700"} hover:font-bold`;

  return (
    <nav className="fixed top-0 right-0 p-4 w-full z-50">
      <div className="flex justify-end items-center">
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/works" className={linkClass("/works")}>
              Works
            </Link>
          </li>
          <li>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Burger menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay + Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6 text-2xl">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`${
              pathname === "/" ? "font-bold" : "text-gray-700"
            } hover:font-bold`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`${
              pathname === "/about" ? "font-bold" : "text-gray-700"
            } hover:font-bold`}
          >
            About
          </Link>
          <Link
            href="/works"
            onClick={() => setIsOpen(false)}
            className={`${
              pathname === "/works" ? "font-bold" : "text-gray-700"
            } hover:font-bold`}
          >
            Works
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`${
              pathname === "/contact" ? "font-bold" : "text-gray-700"
            } hover:font-bold`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
