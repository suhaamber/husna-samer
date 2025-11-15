import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { themes } from "../themes";
import FadeInWhenVisible from "@/app/components/FadeInWhenVisible";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Husna Samer | Work",
  description: "View Husna Samer's work.",
};

export default async function ThemePage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme: themeKey } = await params;
  const theme = themes[themeKey];

  if (!theme) {
    return (
      <main className="min-h-screen flex items-center justify-center text-orange-50 bg-stone-800">
        <h1 className="text-3xl font-heading">Theme not found</h1>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-800 text-orange-50 px-6 md:px-20 py-24">
        {/* Subheading and Theme Title */}
        <FadeInWhenVisible>
          <div className="mb-12">
            <Link
              href="/work"
              className="text-base md:text-xl uppercase font-heading underline tracking-widest text-stone-400 mb-2"
            >
              Work
            </Link>
            <h1 className="text-2xl md:text-4xl font-heading mb-6">
              {theme.title}
            </h1>
            <p className="text-base font-body md:text-lg text-stone-300 leading-relaxed max-w-3xl">
              {theme.description}
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Works Grid */}
        <div className="space-y-10">
          {theme.works.map((work, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:space-x-10 md:space-x-reverse-0`}
            >
              {/* Image */}
              <div className="relative md:w-1/2 w-full mb-6 md:mb-0 flex items-end justify-center md:justify-end">
                <div className="inline-block border-4 border-stone-300 bg-stone-300">
                  <Image
                    src={work.src}
                    alt={work.title}
                    width={1080} // fixed width
                    height={0} // let Next.js auto-size height
                    className="h-auto w-full max-h-[600px] object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full flex flex-col">
                <div className="text-left md:text-left text-stone-100">
                  <h3 className="font-heading text-3xl md:text-2xl font-semibold">
                    {work.title}
                  </h3>
                  <p className="font-heading-thin text-xl text-stone-400">
                    {work.year}
                  </p>
                  <p className="font-body text-lg text-stone-300 italic">
                    {work.medium}
                  </p>
                  <p className="font-body text-lg text-stone-300">
                    {work.size}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <Link
            href="/work"
            className="text-base md:text-xl uppercase font-heading underline tracking-widest text-stone-400 pt-8"
          >
            back to work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
