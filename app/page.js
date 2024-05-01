import { outfit } from "./ui/fonts";
import Navbar from "./ui/header/Navbar";
import HeroSection from "./ui/home/heroSection";
export default function Home() {
  return (
    <main
      className={`${outfit.className} font-medium bg-dark text-white text-center w-full`}
    >
      <Navbar />
      <HeroSection />
    </main>
  );
}
