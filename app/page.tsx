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
            src="/hero-image-1.png"
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

        <section id="about" className="bg-stone-800 py-20 px-6 md:px-20">
          <FadeInWhenVisible>
            <div className="md:flex md:items-center md:justify-start">

              {/* Right TEXT AREA */}
              <div className="md:w-1/2 ml-6 md:ml-0">
                <h2 className="text-5xl font-heading text-orange-50 mb-12">
                  husna samer
                </h2>

                <div className="flex flex-col space-y-8 ml-4 md:ml-12 mb-12">
                  <Link
                    href="/about"
                    className="inline-flex items-start text-stone-100 text-lg md:text-3xl font-heading hover:text-orange-300"
                  >
                    about
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
                  
                  <Link
                    href="/work"
                    className="inline-flex items-start text-stone-100 text-lg md:text-3xl font-heading hover:text-orange-300"
                  >
                    View Work
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
{/*
                  <Link
                    href="/archive"
                    className="inline-flex items-start text-stone-100 text-lg md:text-3xl font-heading hover:text-orange-300"
                  >
                    View Archive
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
                  </Link>*/}
                </div>
              </div>
            </div>
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
