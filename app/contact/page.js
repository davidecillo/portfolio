import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-col items-center pt-8 min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      <section className="flex flex-col md:flex-row items-start justify-start gap-12 px-8 py-24 max-w-5xl mx-auto w-full text-gray-700 text-lg leading-relaxed">
        <div className="relative">
          <Image
            src="/profile pic.jpg"
            alt="Davide Colombi"
            height={400}
            width={300}
            className=""
          />
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-semibold text-[#292c34] mb-4">
            Let's connect!
          </h2>
          <p>
            Whether you’re interested in collaborating, have a project idea, or
            just want to say hi, <br /> I’d love to hear from you. Feel free to
            reach out via email or connect with me on my professional channels.
          </p>

          <div className="space-y-2 mt-2">
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
              📄 <strong>Resume: </strong>{" "}
              <a
                href="/cv/Colombi Davide - CV 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                IT
              </a>
              {" - "}
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

      <div className="fixed bottom-4 left-8 flex items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">Contact</h2>
      </div>
    </main>
  );
}
