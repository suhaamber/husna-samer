// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HomePage() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // hide navbar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scrolling down → hide navbar
      } else {
        setShowNav(true); // scrolling up → show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex flex-col md:flex-row-reverse bg-white font-heading">
      {/* Transparent Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent py-6 transition-transform duration-500 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex justify-evenly text-orange-50 font-heading-thin text-s sm:text-base md:text-xl font-bold">
          <li>
            <a
              href="#about"
              className="hover:text-stone-300 hover:underline italic md:tracking-widest"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-stone-300 hover:underline italic md:tracking-widest"
            >
              work
            </a>
          </li>
          <li>
            <a
              href="#notes"
              className="hover:text-stone-300 hover:underline italic md:tracking-widest"
            >
              notes
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-stone-300 hover:underline italic md:tracking-widest"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>

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
            <div className="flex flex-col space-y-8 ml-4 md:ml-12 md:max-w-[60%]">
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
                approaches this <i>self</i> as a mutable vessel of experience, where
                memory gathers, erodes, and transforms. Guided by an instinctive
                pull toward blues and reds, she constructs emotive, layered
                compositions that oscillate between serenity and intensity.
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
          </FadeInWhenVisible>
        </section>

        {/* Work Section */}
        <section id="work" className="bg-stone-800 py-20 px-6 md:px-20">
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

        <section className="bg-stone-800 py-20 px-6 md:px-20">
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
        <section
          id="contact"
          className="bg-stone-900 text-orange-50 py-12 px-6 md:px-20"
        >
          {/* Divider line */}
          <div className="border-t border-orange-100 opacity-40 mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
            {/* Left: Email */}
            <a
              href="mailto:husnasamer@example.com"
              className="hover:underline mb-4 md:mb-0"
            >
              husnasamer@example.com
            </a>

            {/* Right: Social Icons */}
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5.5a1 1 0 110-2 1 1 0 010 2zM12 9a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>

              {/* Saatchi Art */}
              <a
                href="https://www.saatchiart.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saatchi Art"
                className="hover:text-orange-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm4.5 17.5h-9v-2h9v2zm0-4h-9v-2h9v2zm0-4h-9v-2h9v2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
