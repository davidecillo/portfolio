"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

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
          <p className="text-gray-500 mb-4">October 2024</p>
          <p>
            PawPal is an app designed for new dog owners, providing training
            advice, breed insights and behavioral tips. Users can track their
            dog’s milestones, explore daily suggestions, and access helpful
            comments to improve pet care and well-being.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#292c34] mb-2">
            Tools & Technologies
          </h2>
          <ul className="list-disc list-inside">
            <li>Figma</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#292c34] mb-6">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <Image
              src="/Projects/PawPal/PawPal - cover.jpg"
              alt="PawPal cover"
              width={500}
              height={300}
              className=""
            />
            <Image
              src="/Projects/PawPal/PawPal - hand mockup.png"
              alt="PawPal hand mockup"
              width={500}
              height={300}
              className="object-cover"
            />
            <Image
              src="/Projects/PawPal/All Pages.jpg"
              alt="PawPal all pages"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
