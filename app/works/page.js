import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  const projects = [
    {
      id: 1,
      image: "/Projects/PawPal/PawPal - Cover.jpg",
      title: "PawPal",
      path: "PawPal",
    },
    {
      id: 2,
      image: "/Projects/Spotify/Spotify Rebranding - Main Pages.jpg",
      title: "Spotify Rebranding",
      path: "Spotify",
    },
    {
      id: 3,
      image: "/Projects/Cineverse/Cineverse.jpg",
      title: "CineVerse",
      path: "CineVerse",
    },
    {
      id: 4,
      image: "/Projects/Porsche/Porsche Mockup.jpg",
      title: "Porsche App",
      path: "Porsche",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 w-screen overflow-hidden">
      <Navbar />

      {/* Contenitore del carosello */}
      <div className="relative w-full flex items-center justify-start overflow-hidden mb-16">
        <div className="flex space-x-6 pr-6 overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.path}`}
              className="snap-start flex-shrink-0 h-[60vh] aspect-[4/3] relative shadow-xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                quality={100}
              />
            </Link>
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
