import Navbar from "@/components/Navbar";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="CineVerse: An app for movie lovers to track and explore films."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full px-6 max-w-5xl my-4 mx-auto md:hidden">
        <h1 className="text-3xl font-bold text-[#292c34]">About</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-start px-6 md:px-8 md:py-8 max-w-5xl mx-auto text-justify">
        <div className="relative aspect-[4/3] w-full max-w-[400px] mb-6">
          <Image
            src="/profile laptop.jpg"
            alt="Davide Colombi"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full mb-2 md:space-y-6 text-gray-700 md:text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#292c34] mb-2">
            Nice to meet you!
          </h2>
          <p>
            I'm Davide, a <strong>Freelance Web Developer</strong> and
            <strong> UX/UI Designer</strong> with a passion for crafting
            intuitive, meaningful experiences.
          </p>
          <p>
            I'm driven by curiosity and creativity, with a strong interest in
            both design and development. I love exploring new ideas and staying
            on top of trends to create digital experiences that feel natural,
            engaging and genuinely improve how people interact with technology.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-8 pb-8 mt-4 md:pb-32 max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed text-justify">
        <h2 className="text-2xl font-semibold mb-3 text-[#292c34]">
          Work Experiences
        </h2>
        <ul className="space-y-4">
          <li>
            <strong>Web Developer</strong> for studioPANG |
            <em> May 2025 - now</em>
            <br />I design and develop custom websites using WordPress and
            Elementor, combining functional layouts with creative design
            solutions.
          </li>
          <li>
            <strong>UX/UI Designer</strong> at SIT Informatica |
            <em> January 2025 - March 2025</em>
            <br />
            During my experience, I focused on developing front-end solutions
            and designing intuitive UX/UI interfaces using SitePainter and
            Portal Studio.
          </li>
        </ul>
      </div>

      <div className="hidden md:flex fixed bottom-4 left-8 items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">About</h2>
      </div>
    </main>
  );
}
