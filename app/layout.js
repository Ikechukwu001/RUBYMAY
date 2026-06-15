import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Rose Linda Relax - Private Massage Experience",
  description:
    "Private, one-on-one massage experience focused on comfort, relaxation, and personalized care.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-white text-[var(--foreground)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}