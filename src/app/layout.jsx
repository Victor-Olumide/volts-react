import { Playwrite_AR } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const play = Playwrite_AR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"]
});

export const metadata = {
  title: "Understanding Nestjs Framework",
  description: "A comprehensive guide to mastering the Next.js framework",
  authors: ['Victor Olumide'],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={play.className}
      >
        <Navbar />
        <div className="min-h-screen p-4">

        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
