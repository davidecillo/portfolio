"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const carouselProjects = [
  {
    id: 1,
    image: "/Projects/PawPal/pawpal.png",
    title: "PawPal",
    path: "PawPal",
    description:
      "PawPal is an app designed for new dog owners, providing training advice, breed insights and behavioral tips.",
  },
  {
    id: 2,
    image: "/Projects/Spotify/spotify.png",
    title: "Spotify",
    path: "Spotify",
    description:
      "A concept redesign of Spotify focused on clarity, hierarchy, and modern UI patterns.",
  },
  {
    id: 3,
    image: "/Projects/CineVerse/cineverse.png",
    title: "Cineverse",
    path: "Cineverse",
    description:
      "Cineverse helps movie lovers explore trending films, share opinions, and build their personal watchlist.",
  },
  {
    id: 4,
    image: "/Projects/Porsche/porsche.png",
    title: "Porsche",
    path: "Porsche",
    description:
      "A Porsche microsite concept built around performance, aesthetics, and the brand’s legacy.",
  },
];

export default function WorksCarousel() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Container orizzontale con snap */}
      <section className="flex overflow-x-auto snap-x snap-mandatory h-screen w-full scrollbar-hide scroll-smooth">
        {carouselProjects.map((project) => (
          <div
            key={project.id}
            className="relative flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center snap-center px-4"
          >
            {/* Titolo dietro l'immagine */}
            <h2 className="title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[21vw] font-bold z-0 select-none tracking-tight leading-none pointer-events-none md:text-[20vw] lg:text-[15vw]">
              {project.title}
            </h2>

            {/* Immagine progetto */}
            <Link
              href={`/works/${project.path}`}
              className="relative z-10 flex items-center justify-center"
            >
              <div className="h-[70vh] max-h-[450px] aspect-[2/3] md:h-[80vh] md:max-h-[600px] lg:max-h-[900px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={900}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </Link>

            {/* Descrizione */}
            <p className="content w-full max-w-2xl text-center text-lg leading-relaxed mt-6 md:text-2xl lg:text-xl">
              {project.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
