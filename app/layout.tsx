import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components";
import FooterWrapper from "./components/footer-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarfaraj Shaikh - Frontend Developer",
  description: "Personal website of Sarfaraj Shaikh, a Software Engineer specializing in frontend development",
  keywords: ["Sarfaraj Shaikh", "Software Engineer", "Frontend Developer", "React", "Svelte"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col`}>
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}
