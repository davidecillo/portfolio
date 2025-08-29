"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "CineVerse",
    path: "CineVerse",
    description:
      "CineVerse helps movie lovers explore trending films, share opinions, and build their personal watchlist.",
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
  const [[index, direction], setIndex] = useState([0, 0]);
  const len = carouselProjects.length;
  const router = useRouter();

  // refs per distinguere drag vs click
  const startX = useRef(0);
  const moved = useRef(false);

  const paginate = (dir) => {
    setIndex(([i]) => {
      const next = (i + dir + len) % len;
      return [next, dir];
    });
  };

  const slideVariants = {
    enter: (dir) => ({ x: 0, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir) => ({ x: -100, opacity: 0 }),
  };

  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;
  const swipeThreshold = 1000;

  const project = carouselProjects[index];

  return (
    <main className="relative h-[100dvh] overflow-hidden">
      <Navbar />

      <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={(e) => {
              moved.current = false;
              startX.current = e.clientX || e.touches?.[0]?.clientX || 0;
            }}
            onDrag={(e) => {
              const x = e.clientX || e.touches?.[0]?.clientX || 0;
              if (Math.abs(x - startX.current) > 5) moved.current = true;
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeThreshold || offset.x < -120) paginate(1);
              else if (swipe > swipeThreshold || offset.x > 120) paginate(-1);
            }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 cursor-grab"
          >
            {/* Titolo */}
            <motion.h2
              key={`${project.id}-title`}
              initial={{ opacity: 0 }} // parte invisibile anche al mount
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0 }} // primo a comparire
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    text-[20vw] font-bold z-0 select-none tracking-tight leading-none
    pointer-events-none lg:text-[15vw]"
            >
              {project.title}
            </motion.h2>

            {/* Immagine */}
            <motion.div
              key={`${project.id}-image`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.6 }} // secondo a comparire
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    h-[65vh] max-h-[450px] md:max-h-[600px] lg:max-h-[900px] aspect-[2/3] cursor-pointer"
              onPointerUp={() => {
                if (!moved.current) router.push(`/works/${project.path}`);
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={900}
                className="object-contain w-full h-full select-none pointer-events-none"
                draggable={false}
                priority
              />
            </motion.div>

            {/* Descrizione */}
            <motion.p
              key={`${project.id}-desc`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute z-10 mx-8 mt-[75vh] text-center text-lg leading-relaxed 
    md:text-2xl lg:text-xl lg:mt-[80vh] xl:text-2xl"
            >
              {project.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
