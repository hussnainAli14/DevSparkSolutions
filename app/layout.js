import "./globals.css";
import { outfit } from "./ui/fonts";

export const metadata = {
  title: "DevSpark Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} flex flex-col justify-center items-center antialiased max-w-screen-xl my-0 mx-auto pt-10 pb-20 bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
