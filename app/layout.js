import Footer from "./components/footer/Footer";
import "./globals.css";
import { outfit } from "./ui/fonts";
import Navbar from "./ui/header/Navbar";

export const metadata = {
  title: "DevSpark Solutions",
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
