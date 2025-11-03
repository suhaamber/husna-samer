import Image from "next/image";
import Navbar from "../components/Navbar";
import { themes } from "./themes";
import Link from "next/link";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Footer from "../components/Footer";

export const metadata = {
  title: "Husna Samer | Work",
  description: "View Husna Samer's work.",
};

export default function WorkPage() {
  return (
    <>
    <div className="min-h-screen bg-stone-900 text-orange-50 px-6 md:px-20 py-20 md:py-36">
      <Navbar />
      <main>
        <FadeInWhenVisible>
        <h1 className="text-5xl font-heading mb-10">Work</h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
        <div className="grid md:grid-cols-3 gap-8">
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
        </div>
        </FadeInWhenVisible>
      </main>
    </div>
    <Footer />
    </>
  );
}
