"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function Porsche() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>Porsche</title>
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
              Porsche Experience
            </h1>
            <p className="text-gray-500 mb-4">August 2024</p>
            <p className="text-justify">
              Porsche Experience is your ultimate gateway into the world of
              Porsche. Discover an exclusive catalog of legendary and new
              models, explore detailed specs and stay ahead with the latest news
              and innovations. From timeless classics to cutting-edge designs,
              Porsche Experience keeps you connected to the passion,
              performance, and prestige that define the brand, all in one
              elegant, intuitive app.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#292c34] mb-2">
              Tools & Technologies
            </h2>
            <ul className="list-disc list-inside text-justify">
              <li>Figma</li>
              <li>Porsche Poster</li>
              <li>Dribbble</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#292c34] mb-6">
              Gallery
            </h2>

            {/* Prima riga: 60% - 40% */}
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 mb-4">
              <div className="relative h-[210px] md:h-[300px]">
                <Image
                  src="/Projects/Porsche/Porsche Mockup.jpg"
                  alt="Porsche Mockup"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  onClick={() =>
                    setSelectedImage("/Projects/Porsche/Porsche Mockup.jpg")
                  }
                />
              </div>
              <div className="relative h-[210px] md:h-[300px]">
                <Image
                  src="/Projects/Porsche/Catalog.png"
                  alt="Porsche Catalog"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  onClick={() =>
                    setSelectedImage("/Projects/Porsche/Catalog.png")
                  }
                />
              </div>
            </div>

            {/* Seconda riga: full width */}
            <div className="relative h-[210px] md:h-[300px] mb-4">
              <Image
                src="/Projects/Porsche/All Pages.png"
                alt="Porsche App Pages"
                fill
                className="object-contain w-full h-full cursor-pointer"
                sizes="100vw"
                onClick={() =>
                  setSelectedImage("/Projects/Porsche/All Pages.png")
                }
              />
            </div>

            {/* Terza riga: 50% - 50% */}
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-4 mb-4">
              <div className="relative h-[210px] md:h-[300px]">
                <Image
                  src="/Projects/Porsche/wallpaper1.jpg"
                  alt="Porsche Poster 1"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onClick={() =>
                    setSelectedImage("/Projects/Porsche/wallpaper1.jpg")
                  }
                />
              </div>
              <div className="relative h-[210px] md:h-[300px]">
                <Image
                  src="/Projects/Porsche/wallpaper2.jpg"
                  alt="Porsche Poster 2"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onClick={() =>
                    setSelectedImage("/Projects/Porsche/wallpaper2.jpg")
                  }
                />
              </div>
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
