import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      <section className="w-full px-6 max-w-5xl mx-auto mb-6 md:hidden">
        <h1 className="text-4xl font-bold text-[#292c34]">About</h1>
      </section>

      <section className="flex flex-col md:flex-row items-start justify-start gap-8 px-6 md:px-8 py-6 md:py-8 max-w-5xl mx-auto text-justify">
        <div className="relative">
          <Image
            src="/profile pic.jpg"
            alt="Davide Colombi"
            width={260}
            height={390}
            className="object-contain"
          />
        </div>

        <div className="w-full space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Hi! I'm Davide, a <strong>UX/UI Designer</strong> and{" "}
            <strong>Front-End Developer</strong> with a passion for
            crafting intuitive, meaningful experiences.
          </p>
          <p>
            My approach combines curiosity, creativity and a solid understanding
            of both design and development. I'm always seeking new ways to grow
            and improve by exploring emerging trends, experimenting with fresh
            ideas, and staying curious about how design and development can
            shape the way we interact with technology.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-24 mt-4 md:pb-32 max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed text-justify">
        <h2 className="text-2xl font-semibold mb-2 text-[#292c34]">
          Work Experiences
        </h2>
        <ul className="space-y-4">
          <li>
            <strong>UX/UI Designer</strong> at SIT Informatica |{" "}
            <em>January 2025 - March 2025</em>
            <br />
            During my experience, I focused on developing front-end solutions
            and designing intuitive UX/UI interfaces using SitePainter and
            Portal Studio. Throughout the process, I collaborated closely with
            cross-functional teams to create seamless user experiences and
            continuously optimize design solutions.
          </li>
        </ul>
      </section>

      <div className="hidden md:flex fixed bottom-4 left-8 items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">About</h2>
      </div>
    </main>
  );
}
