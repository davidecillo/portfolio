import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Contact - Davide Colombi",
  description: "Contact Davide Colombi",
};

export default function Contact() {
  return (
    <main className="flex flex-col pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col mt-8 md:mt-0 md:flex-row md:items-center justify-center px-6 md:pt-8">
        <div className="relative aspect-[3/4] w-full max-w-[400px] mb-6 md:mr-12">
          <Image
            src="/profile pic.jpg"
            alt="Davide Colombi"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="content w-full mb-2 md:w-2xl text-gray-700 md:text-lg leading-relaxed">
          <h2 className="title text-2xl font-bold mb-6 text-[#292c34]">
            Let's get in touch!
          </h2>
          <p>
            Whether you’re interested in collaborating, have a project idea, or
            just want to say hi, I’d love to hear from you. Feel free to reach
            out via email or connect with me on my professional channels.
          </p>

          <div className="mt-4">
            <div className="mb-8">
                <a
                  href="mailto:davide.colombi04@gmail.com"
                  className="hover:underline"
                >
                  davide.colombi04@gmail.com
                </a>
            </div>

            <div className="mb-4">
              <strong>Find me</strong>
              <div className="flex mt-1 gap-2">
                <a
                  href="https://www.linkedin.com/in/davidecolombii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/linkedin icon.svg"
                    alt="linkedin"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://github.com/davidecillo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/github icon.svg"
                    alt="github"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
            <div className="mb-4">
              <div>
                <strong>Resume</strong>
                <div>
                  <a
                    href="/cv/Colombi Davide - CV 2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    it
                  </a>{" "}
                  -{" "}
                  <a
                    href="/cv/Colombi Davide - CV EN 2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    en
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
