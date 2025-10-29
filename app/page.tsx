// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HomePage() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <ul className="flex justify-evenly text-orange-50 font-heading text-lg">
          <li>
            <a
              href="#home"
              className="hover:text-red-200 italic tracking-widest"
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-red-200 italic tracking-widest"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-red-200 italic tracking-widest"
            >
              work
            </a>
          </li>
          <li>
            <a
              href="#notes"
              className="hover:text-red-200 italic tracking-widest"
            >
              notes
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-red-200 italic tracking-widest"
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

           <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-stone-800 to-transparent pointer-events-none" />

          {/* Title Overlay */}
          <div className="absolute bottom-20 right-16 text-right">
            <h1 className="text-8xl font-syncopate text-orange-50 leading-[0.9]">
              husna
              <br />
              samer
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel laoreet nisl. Praesent feugiat, lectus eu porta porta, neque
                eros fringilla justo, nec tincidunt ipsum risus ultricies ante.
                Aliquam commodo dolor et sem pretium, sed ultricies augue
                fringilla. Vestibulum sit amet elit accumsan, maximus quam vel,
                tempor turpis. Donec et turpis id est scelerisque elementum. Nam
                aliquet rhoncus turpis, faucibus sollicitudin purus cursus at.
              </p>
              <p className="font-body text-orange-100 text-justify text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel laoreet nisl. Praesent feugiat, lectus eu porta porta, neque
                eros fringilla justo, nec tincidunt ipsum risus ultricies ante.
                Aliquam commodo dolor et sem pretium, sed ultricies augue
                fringilla. Vestibulum sit amet elit accumsan, maximus quam vel,
                tempor turpis. Donec et turpis id est scelerisque elementum. Nam
                aliquet rhoncus turpis, faucibus sollicitudin purus cursus at.
              </p>
            </div>
            </FadeInWhenVisible>
          </section>
        

        
          {/* Work Section */}
          <section id="work" className="bg-stone-800 py-20 px-6 md:px-20">
            <FadeInWhenVisible>
            <h2 className="text-5xl font-heading text-orange-50 mb-10">
              work &gt; <u>2025</u>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vel laoreet nisl.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vel laoreet nisl. Praesent feugiat, lectus eu porta
                  porta, neque eros fringilla justo, nec tincidunt ipsum risus
                  ultricies ante. Aliquam commodo dolor et sem pretium
                </p>
              </div>
            </div>
          </section>
        

        
          <section className="bg-stone-800 py-20 px-6 md:px-20">
            <FadeInWhenVisible>
            <h2 className="text-5xl font-heading text-orange-50 mb-10">
              work &gt; <u>2024</u>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vel laoreet nisl.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vel laoreet nisl. Praesent feugiat, lectus eu porta
                  porta, neque eros fringilla justo, nec tincidunt ipsum risus
                  ultricies ante. Aliquam commodo dolor et sem pretium
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
