"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function SpotifyRebranding() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>Spotify Rebranding</title>
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
              Spotify Rebranding
            </h1>
            <p className="text-gray-500 mb-4">July 2023</p>
            <p className="text-justify">
              The Spotify Rebranding project explores a visual redesign of the
              Spotify identity, focusing on a refreshed logo, consistent UI
              components, and modern layouts. The concept aims to improve user
              interaction, clarity, and branding consistency across digital
              platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#292c34] mb-2">
              Tools & Technologies
            </h2>
            <ul className="list-disc list-inside text-justify">
              <li>Figma</li>
              <li>Illustrator</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#292c34] mb-6">
              Gallery
            </h2>

            {/* Griglia asimmetrica 30% - 70% da md in su */}
            <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 mb-4">
              <div className="relative h-[210px] md:h-[300px]">
                <Image
                  src="/Projects/Spotify/News.png"
                  alt="Spotify News Page"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  onClick={() =>
                    setSelectedImage("/Projects/Spotify/News.png")
                  }
                />
              </div>
              <div className="relative h-[210px] md:h-[300px]">
                <Image
                  src="/Projects/Spotify/All Pages.png"
                  alt="Spotify redesign full"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  onClick={() =>
                    setSelectedImage("/Projects/Spotify/All Pages.png")
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
