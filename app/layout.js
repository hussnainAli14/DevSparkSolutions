import Footer from "./components/footer/Footer";
import "./globals.css";
import { outfit } from "./ui/fonts";
import Navbar from "./ui/header/Navbar";

export const metadata = {
  title: "DevCrew",
  keywords: [
    "craigslist web developer jobs los angeles",
    "web",
    "software",
    "jobs",
    "web developer",
    "web development",
    "web development salary",
    "web development company",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="root">
      <body
        className={`${outfit.className} flex flex-col justify-center items-center antialiased w-full m-auto bg-black pt-10 pb-20 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
