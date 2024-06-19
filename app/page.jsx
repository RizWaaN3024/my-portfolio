import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="w-full bg-[#000000] sm:px-10 px-5">
      <div className="w-full ">
        <Navbar />
        <Hero />
      </div>
      </div>
      
    </main>
  );
}
