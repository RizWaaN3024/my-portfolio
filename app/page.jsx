import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/WhyHireMe";
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
      <div className="sm:px-10 px-5 w-full">
        <AboutMe />
      </div>
      <div className="sm:px-10 px-5 w-full bg-black">
      <Skills />
      </div>
      
    </main>
  );
}
