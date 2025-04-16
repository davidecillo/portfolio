import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Contact</h1>
        {/* <p className="mt-4">Here you can find our contact details.</p> */}
      </div>
    </main>
  );
}
