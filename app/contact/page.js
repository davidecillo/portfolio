import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Head from "next/head";

export default function Contact() {
  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="CineVerse: An app for movie lovers to track and explore films."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="w-full px-6 max-w-5xl my-4 mx-auto md:hidden">
        <h1 className="text-3xl font-bold text-[#292c34]">Contact</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-start px-6 md:px-8 md:py-8 max-w-5xl mx-auto text-justify">
        <div className="relative w-[240px] h-[320px] mb-6">
          <Image
            src="/profile pic.jpg"
            alt="Davide Colombi"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full mb-2 md:space-y-6 text-gray-700 md:text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold mb-2 text-[#292c34]">
            Let's get in touch!
          </h2>
          <p>
            Whether you’re interested in collaborating, have a project idea, or
            just want to say hi, I’d love to hear from you. Feel free to reach
            out via email or connect with me on my professional channels.
          </p>

          <div className="mt-4">
            <div className="mb-4">
              <strong>Email</strong>
              <p>
                <a
                  href="mailto:davide.colombi04@gmail.com"
                  className="hover:underline"
                >
                  davide.colombi04@gmail.com
                </a>
              </p>
            </div>

            <div className="mb-4">
              <strong>Find me</strong>
              <div className="flex mt-1 gap-1">
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
            <div>
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
                  </a>
                  {" "} - {" "}
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

      <div className="hidden md:flex fixed bottom-4 left-8 items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">Contact</h2>
      </div>
    </main>
  );
}
