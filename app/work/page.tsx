import Image from "next/image";
import Navbar from "../components/Navbar";
import { themes } from "./themes";
import Link from "next/link";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Footer from "../components/Footer";

export const metadata = {
  title: "Husna Samer",
  description: "View Husna Samer's work.",
  keywords: [
    "husna",
    "samer",
    "artist",
    "oil",
    "paint",
    "painting",
    "uae",
    "uae artists",
    "young artists",
    "youth art",
    "uae youth",
    "united arab emirates",
    "art",
    "fine art",
    "surreal",
    "collect",
    "buy",
    "abstract",
    "bold",
    "red",
    "blue",
    "husnasamer",
    "canvas",
    "exhibition",
    "here we are",
    "italian cultural institute",
    "manarat al saadiyat",
    "culture",
    "abu dhabi",
    "dubai",
    "Thaer Select",
    "Mirage",
    "Gulf",
    "Middle East",
  ],
  openGraph: {
    title: "",
    description: "",
    siteName: "",
    locale: "",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function WorkPage() {
  return (
    <>
      <div className="min-h-screen bg-stone-800 text-orange-50 px-6 md:px-20 py-20 md:py-36">
        <Navbar />
        <main className="md:max-w-5xl md:mx-auto md:px-6">
          <FadeInWhenVisible>
            <h1 className="text-5xl font-heading mb-10">Work</h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(themes).map(([key, theme]) => (
                <Link
                  key={key}
                  href={`/work/${key}`}
                  className="block border border-stone-700 p-6 rounded-xl hover:bg-stone-800 transition-all"
                >
                  <h2 className="text-2xl font-heading mb-2">{theme.title}</h2>
                  <p className="text-stone-300 text-sm font-body md:text-base">
                    {theme.subtitle}
                  </p>
                </Link>
              ))}
              <Link
                
                href={`/work/memory`}
                className="block border border-stone-700 p-6 rounded-xl hover:bg-stone-800 transition-all"
              >
                <h2 className="text-xl font-heading mb-2">A New Truth: On Rayan’s Memory Work</h2>
                <p className="text-stone-300 text-sm font-body md:text-base">
                    A written project that explores the emotional landscapes within Rayan Aljneibi’s photographs - where memory begins to morph.
                  </p>
              </Link>
            </div>
          </FadeInWhenVisible>
        </main>
      </div>
      <Footer />
    </>
  );
}
