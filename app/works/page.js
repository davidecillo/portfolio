import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const carouselProjects = [
  {
    id: 1,
    // image: "/Projects/PawPal/PawPal - Mobile Cover.jpg",
    title: "PawPal",
    path: "PawPal",
  },
  {
    id: 2,
    // image: "/Projects/Spotify/Spotify Mobile Mockup.jpg",
    title: "Spotify Rebranding",
    path: "Spotify",
  },
  {
    id: 3,
    // image: "/Projects/CineVerse/CineVerse - Mobile Mockup.jpg",
    title: "CineVerse",
    path: "CineVerse",
  },
  {
    id: 4,
    // image: "/Projects/Porsche/Porsche Mobile Mockup.jpg",
    title: "Porsche App",
    path: "Porsche",
  },
];

export default function Works() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>Works</title>
        <meta name="description" content="Progetti UX/UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Titolo mobile */}
      {/* <section className="w-full px-6 max-w-5xl mx-auto mt-8 mb-6 md:hidden">
        <h1 className="text-4xl font-bold text-[#292c34]">Works</h1>
      </section> */}

      <section className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide py-20 px-6">
        <div className="flex gap-6 justify-start md:justify-center">
          {carouselProjects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.path}`}
              className="snap-center relative flex-shrink-0 w-[60vw] md:w-[40vw] aspect-[3/4] shadow-xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                quality={100}
                sizes="(min-width: 768px) 40vw, 60vw"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Titolo fisso desktop/tablet */}
      <div className="hidden md:flex fixed bottom-4 left-8 items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">Works</h2>
      </div>
    </main>
  );
}
