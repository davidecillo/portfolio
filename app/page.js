import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Davide Colombi",
  description: "Portfolio",
};

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden">
      <Navbar />

      <div className="absolute bottom-4 left-4">
        <h2 className="title text-6xl font-bold md:text-9xl leading-none">
          Davide
          <br />
          Colombi
        </h2>
      </div>
    </main>
  );
}
