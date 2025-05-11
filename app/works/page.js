import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Works() {
  const mobileProjects = [
    {
      id: 1,
      image: "/Projects/PawPal/PawPal - Mobile Cover.jpg",
      title: "PawPal",
      path: "PawPal",
    },
    {
      id: 2,
      image: "/Projects/Spotify/Spotify Mobile Mockup.jpg",
      title: "Spotify Rebranding",
      path: "Spotify",
    },
    {
      id: 3,
      image: "/Projects/CineVerse/CineVerse - Mobile Mockup.jpg",
      title: "CineVerse",
      path: "CineVerse",
    },
    {
      id: 4,
      image: "/Projects/Porsche/Porsche Mobile Mockup.jpg",
      title: "Porsche App",
      path: "Porsche",
    },
  ];

  const projects = [
    {
      id: 1,
      image: "/Projects/PawPal/PawPal - Cover.png",
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
      image: "/Projects/CineVerse/CineVerse.jpg",
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
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>Works</title>
        <meta
          name="description"
          content="CineVerse: An app for movie lovers to track and explore films."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {/* Titolo mobile */}
      <section className="w-full px-6 max-w-5xl mx-auto mb-6 md:hidden">
        <h1 className="text-4xl font-bold text-[#292c34]">Works</h1>
      </section>

      {/* Carosello mobile */}
      <div className="md:hidden flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory pb-24 space-x-4 pl-6 pr-4 scrollbar-hide">
        {mobileProjects.map((project) => (
          <Link
            key={project.id}
            href={`/works/${project.path}`}
            className="snap-start flex-shrink-0 w-[75vw] aspect-[3/5] relative shadow-xl overflow-hidden"
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

      {/* Carosello desktop/tablet */}
      <div className="hidden md:flex flex-col w-full pt-20 pb-24">
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

      {/* Titolo fisso desktop/tablet */}
      <div className="hidden md:flex fixed bottom-4 left-8 items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">Works</h2>
      </div>
    </main>
  );
}
