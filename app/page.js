import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Davide Colombi",
  description: "Portfolio",
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="h-screen flex items-end px-6 pb-4">
        <h2 className="title font-bold sm:text-6xl md:text-9xl leading-none">
          Davide
          <br />
          Colombi
        </h2>
      </div>
    </main>
  );
}
