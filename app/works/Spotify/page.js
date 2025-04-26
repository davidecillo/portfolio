"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function SpotifyRebrand() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <div
        className={
          selectedImage
            ? "blur-sm transition-all duration-300"
            : "transition-all duration-300"
        }
      >
        <Navbar />
        <section className="px-8 py-24 max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed space-y-10">
          <div>
            <h1 className="text-4xl font-bold text-[#1DB954] mb-2">
              Spotify Rebranding
            </h1>
            <p className="text-gray-500 mb-4">October 2025</p>
            <p>
              This project focuses on refreshing Spotify’s communication while
              maintaining its iconic identity. The brief aimed to encourage
              users to discover new musical trends and emerging artists. Through
              a refined approach to visuals and messaging, the rebranding
              enhances the excitement of exploring fresh sounds, hidden gems and
              the ever-evolving world of music, all without losing the essence
              that makes Spotify instantly recognizable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1DB954] mb-2">
              Tools & Technologies
            </h2>
            <ul className="list-disc list-inside">
              <li>Figma</li>
              <li>Spotify</li>
              <li>Mobbin</li>
              <li>Page Flows</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1DB954]">
              Gallery
            </h2>
            <div className="grid grid-cols-[75%_25%] gap-4">
              <div className="relative h-80">
                <Image
                  src="/Projects/Spotify/All Pages.png"
                  alt="Spotify All Pages"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  onClick={() =>
                    setSelectedImage("/Projects/Spotify/All Pages.png")
                  }
                />
              </div>
              <div className="relative h-80">
                <Image
                  src="/Projects/Spotify/News.png"
                  alt="Spotify News Page"
                  fill
                  className="object-contain w-full h-full cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  onClick={() => setSelectedImage("/Projects/Spotify/News.png")}
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
