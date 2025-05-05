import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      <div className="md:hidden w-full px-6 pt-6">
        <h2 className="text-4xl font-bold text-[#292c34]">Contact</h2>
      </div>

      <section className="flex flex-col md:flex-row items-start justify-start gap-8 px-6 md:px-8 pt-10 md:pt-24 pb-24 max-w-5xl mx-auto w-full text-gray-700 text-lg leading-relaxed">
        <div>
          <div className="relative w-[210px] h-[280px] md:hidden">
            <Image
              src="/profile pic.jpg"
              alt="Davide Colombi"
              fill
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="hidden md:block">
            <Image
              src="/profile pic.jpg"
              alt="Davide Colombi"
              width={400}
              height={300}
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#292c34] mb-2 md:mb-4">
            Let's connect!
          </h2>
          <p className="text-justify">
            Whether you’re interested in collaborating, have a project idea, or
            just want to say hi, I’d love to hear from you. Feel free to reach
            out via email or connect with me on my professional channels.
          </p>

          <div className="space-y-2 mt-4">
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:davide.colombi04@gmail.com"
                className="text-blue-600 hover:underline"
              >
                davide.colombi04@gmail.com
              </a>
            </p>
            <p>
              💼 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/davidecolombii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/davidecolombii
              </a>
            </p>
            <p>
              💻 <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/davidecillo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/davidecillo
              </a>
            </p>
            <p>
              📄 <strong>Resume:</strong>{" "}
              <a
                href="/cv/Colombi Davide - CV 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                IT
              </a>{" "}
              -{" "}
              <a
                href="/cv/Colombi Davide - CV EN 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                EN
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="hidden md:flex fixed bottom-4 left-8 items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">Contact</h2>
      </div>
    </main>
  );
}
