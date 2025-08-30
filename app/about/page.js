import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "About - Davide Colombi",
  description: "About Davide Colombi",
};

export default function About() {
  return (
    <main className="flex flex-col pt-8 bg-gray-50 overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col mt-8 px-4 mb-12 lg:mb-0 lg:min-h-screen lg:flex-row lg:items-center lg:justify-center lg:mt-0">
        <div className="relative aspect-[4/3] w-full max-w-[800px] md:max-w-[1200px] xl:max-w-[1600px] mb-6 lg:mr-12">
          <Image
            src="/davide colombi coding.jpg"
            alt="Davide Colombi"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="content w-full mb-2 lg:text-lg text-left lg:pr-8 xl:text-xl">
          <h2 className="title text-2xl font-bold mb-6 xl:text-3xl">
            Nice to meet you!
          </h2>
          <p className="mb-2">
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
      <div className="px-4 lg:px-8 pb-8 mt-4 lg:pb-32 text-base md:text-lg leading-relaxed text-left xl:text-xl">
        <h2 className="title font-bold text-2xl mb-6 xl:text-3xl">
          Work Experiences
        </h2>
        <ul className="space-y-2">
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
    </main>
  );
}
