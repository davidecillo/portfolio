import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="fixed bottom-4 left-4">
        <h2 className="text-6xl sm:text-6xl md:text-9xl font-bold text-[#292c34] leading-none">
          Davide
          <br />
          Colombi
        </h2>
      </div>
    </main>
  );
}
