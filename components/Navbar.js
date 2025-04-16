"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Ottieni il percorso corrente

  return (
    <nav className="fixed top-0 right-0 p-4 w-full">
      <div className="flex justify-end items-center">
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "font-bold" : "text-gray-700"
              } hover:font-bold`}
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              href="/about"
              className={`${
                pathname === "/contact" ? "font-bold" : "text-gray-700"
              } hover:font-bold`}
            >
              About
            </Link>
          </li>
          <li>
          <Link
              href="/works"
              className={`${
                pathname === "/contact" ? "font-bold" : "text-gray-700"
              } hover:font-bold`}
            >
              Works 
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "font-bold" : "text-gray-700"
              } hover:font-bold`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 bg-white shadow-md p-4 w-40">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "font-bold" : "text-gray-700"
                } hover:font-bold`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:font-bold">
                About
              </Link>
            </li>
            <li>
              <Link href="/works" className="text-gray-700 hover:font-bold">
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
