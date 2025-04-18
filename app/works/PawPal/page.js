"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/Projects/PawPal - hand mockup.png",
];

export default function PawPal() {
  const [current, setCurrent] = useState(0);

  const prevImage = () =>
    setCurrent((current - 1 + images.length) % images.length);
  const nextImage = () => setCurrent((current + 1) % images.length);

  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      <section className="px-8 py-24 max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-[#292c34] mb-2">PawPal</h1>
          <p className="text-gray-500 mb-4">February 2025</p>
          <p>
            PawPal is a mobile-first app designed to help dog owners collect,
            share, and revisit their best moments with their furry friends.
            Users can keep a memory diary, organize their dog’s information, and
            interact with a clean and playful interface.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#292c34] mb-2">
            Tools & Technologies
          </h2>
          <ul className="list-disc list-inside">
            <li>Figma</li>
            <li>Next.js (structure & routing)</li>
            <li>React (for future implementation)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#292c34] mb-4">
            Gallery
          </h2>
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images[current]}
              alt={`PawPal screenshot ${current + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
              ▶
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
