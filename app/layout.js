import "./globals.css";
import { outfit } from "./ui/fonts";

export const metadata = {
  title: "DevSpark Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} flex flex-col justify-center items-center antialiased my-0 mx-auto pt-10 pb-20 px-10 bg-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
