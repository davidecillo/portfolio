import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Works() {
  const projects = [
    { id: 1, image: "/Projects/PawPal - Cover.jpg", title: "PawPal" },
    { id: 2, image: "/Projects/Spotify Rebranding - Main Pages.jpg", title: "Spotify Rebranding" },
    { id: 3, image: "/Projects/Cineverse.jpg", title: "CineVerse" },
    { id: 4, image: "/Projects/Porsche.jpg", title: "Porsche App" }
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 w-screen overflow-hidden">
      <Navbar />

      {/* Contenitore del carosello */}
      <div className="relative w-full flex items-center justify-start overflow-hidden mb-16">
        <div className="flex space-x-6 pr-6 overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-start flex-shrink-0 h-[60vh] aspect-[4/3] relative shadow-xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Titolo in basso a sinistra */}
      <div className="fixed bottom-4 left-8 flex items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">Works</h2>
      </div>
    </main>
  );
}
