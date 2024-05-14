import { outfit } from "./ui/fonts";
import Greetings from "./components/home/Greetings";
import KeyFeatures from "./components/home/KeyFeatures";
import Reason from "./components/home/Reason";
import Work from "./components/home/Work";
import HeroSection from "./components/home/heroSection";
import Review from "./components/home/Review";
import FinalSection from "./components/home/FinalSection";
export default function Home() {
  return (
    <main
      className={`${outfit.className} font-medium bg-dark w-full m-auto px-4 sm:px-10  `}
    >
      <HeroSection />
      <Greetings />
      <KeyFeatures />
      <Reason />
      <Work />
      <Review />
      <FinalSection />
    </main>
  );
}
