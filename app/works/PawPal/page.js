"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function PawPal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>PawPal</title>
        <meta
          name="description"
          content="CineVerse: An app for movie lovers to track and explore films."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          selectedImage
            ? "blur-sm transition-all duration-300"
            : "transition-all duration-300"
        }
      >
        <Navbar />
        <section className="px-6 sm:px-8 py-20 max-w-5xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed space-y-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#292c34] mb-2">
              PawPal
            </h1>
            <p className="text-gray-500 mb-4">October 2024</p>
            <p className="text-justify">
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
            <ul className="list-disc list-inside text-justify">
              <li>Figma</li>
              <li>Dribbble</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#292c34] mb-6">
              Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 mb-4">
              <div className="relative h-60 md:h-80">
                <Image
                  src="/Projects/PawPal/PawPal - Cover.png"
                  alt="PawPal cover"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  onClick={() =>
                    setSelectedImage("/Projects/PawPal/PawPal - cover.png")
                  }
                />
              </div>
              <div className="relative h-60 md:h-80">
                <Image
                  src="/Projects/PawPal/PawPal - hand mockup.png"
                  alt="PawPal hand mockup"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  onClick={() =>
                    setSelectedImage(
                      "/Projects/PawPal/PawPal - hand mockup.png"
                    )
                  }
                />
              </div>
            </div>

            <div className="relative h-60 md:h-80">
              <Image
                src="/Projects/PawPal/All Pages.png"
                alt="PawPal all pages"
                fill
                className="object-contain w-full h-full cursor-pointer"
                sizes="100vw"
                onClick={() =>
                  setSelectedImage("/Projects/PawPal/All Pages.png")
                }
              />
            </div>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xl"
          onClick={closeModal}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="h-auto w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
