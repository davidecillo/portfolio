import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Contact - Davide Colombi",
  description: "Contact Davide Colombi",
};

export default function Contact() {
  return (
    <main className="relative min-h-[100dvh] bg-gray-50 pt-8">
      <Navbar />
      <div className="fixed bottom-0 w-full h-[40vh] md:h-[60vh] lg:hidden z-0">
        <Image
          src="/davidecolombi.png"
          alt="Davide Colombi"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="hidden lg:block fixed bottom-0 left-12 h-[80vh] w-full z-0">
        <Image
          src="/davidecolombi.png"
          alt="Davide Colombi"
          fill
          className="object-contain object-bottom object-left"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-end px-4 lg:pt-8 min-h-screen pb-[45vh] lg:pb-0">
        <div className="lg:w-1/2 lg:pl-12 flex flex-col justify-center w-full mb-8 pt-16 lg:text-lg lg:pt-8 leading-relaxed xl:text-xl">
          <h2 className="title text-2xl font-bold mb-6 xl:text-3xl">
            Let's get in touch!
          </h2>
          <p className="mb-4 lg:hidden">
            Whether you’re interested in collaborating, have a project idea, or
            just want to say hi, I’d love to hear from you. Feel free to reach
            out via email or connect with me on my professional channels.
          </p>
          <p className="hidden mb-4 lg:block">
            Whether you’re interested in collaborating, have a project idea, or
            just want to say hi, I’d love to hear from you. <br />
            Feel free to reach out via email or connect with me on my
            professional channels.
          </p>

          <div className="mt-4">
            <div className="mb-8">
              <a
                href="mailto:davide.colombi04@gmail.com"
                className="underline-grow"
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
                    className="pulse-hover lg:w-7 lg:h-7"
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
                    className="pulse-hover lg:w-7 lg:h-7"
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
                    className="underline-grow"
                  >
                    it
                  </a>{" "}
                  -{" "}
                  <a
                    href="/cv/Colombi Davide - CV EN 2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-grow"
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
