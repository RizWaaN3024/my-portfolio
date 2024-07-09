import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import Navbar from "@/components/Navbar";
import SkillsBanner from "@/components/SkillsBanner";
import WhyHireMe from "@/components/WhyHireMe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="w-full bg-[#000000] sm:px-10 px-5">
        <div className="w-full ">
          <Navbar />
          <Hero />
          <AboutMe />
          <SkillsBanner />
        </div>
      </div>
      <div className="sm:px-10 px-5 w-full bg-black">
        <HireMe />
        <WhyHireMe />
      </div>
    </main>
  );
}
