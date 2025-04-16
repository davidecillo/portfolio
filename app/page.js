import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-8">
        <div className="fixed bottom-4 left-8 flex items-end">
          <h2 className="text-9xl font-bold text-[#292c34]">
            Davide
            <br />
            Colombi
          </h2>
        </div>
      </div>
    </main>
  );
}
