import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-col items-center p-8 space-y-8 max-w-[400px]">
        <h2 className="text-lg mb-4">
          I'm a UX/UI Designer based in Bergamo, Italy, focused on creating
          intuitive, user-centered designs that enhance the user experience.
        </h2>

        <Image
          src="/profile pic.jpg"
          width={300}
          height={400}
          alt="Davide Colombi"
          className="shadow-xl"
        />

        <div className="flex flex-col items-start">
          <p className="mb-4">
            I specialize in creating intuitive, user-friendly designs that
            provide meaningful experiences. With a passion for technology and
            innovation, I constantly strive to improve and adapt to the
            ever-changing design landscape.
          </p>
        </div>
      </div>

      <div className="fixed bottom-4 left-8 flex items-end">
        <h2 className="text-9xl font-bold text-[#292c34]">About</h2>
      </div>
    </main>
  );
}
