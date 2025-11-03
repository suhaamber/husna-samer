// app/page.tsx

import Image from "next/image";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Husna Samer",
  description: "Husna Samer",
};

export default function HomePage() {

  return (
    <div className="flex flex-col md:flex-row-reverse bg-white font-heading">
      {/* Transparent Navbar */}
      <Navbar />

      {/* Body */}
      <div className="flex-1 flex flex-col">
        <main
          id="home"
          className="relative h-screen flex items-end justify-end text-right text-white"
        >
          {/* Background Image */}
          <Image
            src="/hero-image-2.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-stone-800 to-transparent pointer-events-none" />

          {/* Title Overlay */}
          <div className="absolute bottom-24 right-16 text-right">
            <h1 className="text-7xl md:text-8xl font-heading text-orange-50 leading-[0.9]">
              hus
              <br />
              na
              <br />
              sam
              <br />
              er
            </h1>
          </div>
        </main>

        {/* About Section */}
        <section id="about" className="bg-stone-800 py-20 px-6 md:px-20">
          <FadeInWhenVisible>
            <h2 className="text-5xl font-heading text-orange-50 mb-12">
              husna samer.
            </h2>
            <div className="flex flex-col space-y-8 ml-4 md:ml-12 md:max-w-[60%] mb-12">
              <p className="font-body text-orange-100 text-justify text-base md:text-lg">
                Husna Samer is a UAE-based artist whose practice has evolved
                through years of mentorship, each shaping her exploration of how
                the meaning of home shifts within an increasingly global and
                migratory context, altering our perception of memory and
                consequently of the desired self.
              </p>
              <p className="font-body text-orange-100 text-justify text-base md:text-lg">
                For Samer, memory is both collective and personal, it plays a
                vital role in reshaping the boundaries of identity. Her work
                approaches this <i>self</i> as a mutable vessel of experience,
                where memory gathers, erodes, and transforms. Guided by an
                instinctive pull toward blues and reds, she constructs emotive,
                layered compositions that oscillate between serenity and
                intensity.
              </p>
              <p className="font-body text-orange-100 text-justify text-base md:text-lg">
                Rooted in an inclination toward symbolism and surrealism,
                Samer’s paintings often navigate the thresholds between the seen
                and the felt, suggesting inner landscapes rather than depicting
                literal ones. Beneath these shifting forms lies an undertone of
                the Romantic movement, visible in her pursuit of emotional
                depth, atmosphere, and the sublime. Through texture, color, and
                gesture, she invites viewers into spaces where meaning unfolds
                between remembering and forgetting, self and surrounding,
                permanence and change.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-start text-orange-100 text-2xl md:text-3xl font-heading hover:text-orange-300"
            >
              View Work
              {/* Diagonal up arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </Link>
          </FadeInWhenVisible>
        </section>

        {/* Work Section */}
        <section id="work" className="bg-stone-800 py-20 px-6 md:px-20 hidden">
          <FadeInWhenVisible>
            <h2 className="text-5xl font-heading text-orange-50 mb-10">
              <u>2025</u>
            </h2>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 gap-8 content-end">
            {/* Column 1 */}
            <div className="flex flex-col items-start">
              <div className="relative h-[300px] w-full mb-4 flex items-end">
                <Image
                  src="/alienate.jpg"
                  alt="alienate in 2025"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-left font-body text-orange-100 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel laoreet nisl.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start">
              <div className="relative h-[300px] w-full mb-4 flex items-end">
                <Image
                  src="/piece-2025.jpg"
                  alt="piece 2 in 2025"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-left font-body text-orange-100 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel laoreet nisl. Praesent feugiat, lectus eu porta porta, neque
                eros fringilla justo, nec tincidunt ipsum risus ultricies ante.
                Aliquam commodo dolor et sem pretium
              </p>
            </div>
          </div>
        </section>

        <section className="bg-stone-800 py-20 px-6 md:px-20 hidden">
          <FadeInWhenVisible>
            <h2 className="text-5xl font-heading text-orange-50 mb-10">
              <u>2024</u>
            </h2>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 gap-8 content-end">
            {/* Column 1 */}
            <div className="flex flex-col items-start">
              <div className="relative h-[300px] w-full mb-4 flex items-end">
                <Image
                  src="/alienate.jpg"
                  alt="alienate in 2025"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-left font-body text-orange-100 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel laoreet nisl.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start">
              <div className="relative h-[300px] w-full mb-4 flex items-end">
                <Image
                  src="/piece-2025.jpg"
                  alt="piece 2 in 2025"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-left font-body text-orange-100 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel laoreet nisl. Praesent feugiat, lectus eu porta porta, neque
                eros fringilla justo, nec tincidunt ipsum risus ultricies ante.
                Aliquam commodo dolor et sem pretium
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Footer />
      </div>
    </div>
  );
}
