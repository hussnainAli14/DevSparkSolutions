import { outfit } from "./ui/fonts";
import Navbar from "./ui/header/Navbar";
import Greetings from "./ui/home/Greetings";
import HeroSection from "./ui/home/heroSection";
export default function Home() {
  return (
    <main className={`${outfit.className} font-medium bg-dark w-full`}>
      <Navbar />
      <HeroSection />
      <Greetings />
    </main>
  );
}
