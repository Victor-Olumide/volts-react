import { Playwrite_AR } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
