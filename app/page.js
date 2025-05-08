import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Head>
        <title>Davide Colombi</title>
        <meta
          name="description"
          content="CineVerse: An app for movie lovers to track and explore films."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
