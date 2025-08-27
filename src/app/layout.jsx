import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProviders } from "./providers";

const play = Poppins({
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
        <SidebarProviders>
          
        <Navbar />
        <div className="min-h-screen p-4">

        {children}
        </div>

        <Footer />
        </SidebarProviders>
      </body>
    </html>
  );
}
