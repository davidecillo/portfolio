"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function Cineverse() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>CineVerse</title>
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
              CineVerse
            </h1>
            <p className="text-gray-500 mb-4">September 2024</p>
            <p className="text-justify">
              CineVerse is an app for movie lovers to explore trending titles,
              timeless classics, and hidden gems. Dive into curated collections,
              discover recommendations based on your taste, and read authentic
              reviews from fellow film enthusiasts. CineVerse also lets you keep
              track of every movie you’ve watched, rate them and write personal
              thoughts turning your watch history into a cinematic diary.
              Whether you're a casual viewer or a true cinephile, CineVerse
              makes your movie journey more inspiring and memorable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#292c34] mb-2">
              Tools & Technologies
            </h2>
            <ul className="list-disc list-inside text-justify">
              <li>Figma</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#292c34] mb-6">
              Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative h-60 md:block md:h-80">
                <Image
                  src="/Projects/CineVerse/CineVerse.jpg"
                  alt="Cineverse Mockup"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="30vw"
                  onClick={() =>
                    setSelectedImage("/Projects/CineVerse/CineVerse.jpg")
                  }
                />
              </div>

              <div className="relative h-60 md:h-80">
                <Image
                  src="/Projects/CineVerse/Movies.png"
                  alt="Cineverse movie detail"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  onClick={() =>
                    setSelectedImage("/Projects/CineVerse/Movies.png")
                  }
                />
              </div>
            </div>

            <div className="relative h-60 md:h-80">
              <Image
                src="/Projects/CineVerse/All Pages.png"
                alt="Cineverse watchlist"
                fill
                className="object-contain w-full h-full cursor-pointer"
                sizes="100vw"
                onClick={() =>
                  setSelectedImage("/Projects/CineVerse/All Pages.png")
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
