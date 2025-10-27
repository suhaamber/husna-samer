// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      {/* NavBar */}
      <aside
        className={`md:sticky md:top-0 md:right-0 md:h-screen bg-white flex md:flex-col flex-row justify-center md:justify-start items-center md:items-start w-full md:w-40 px-6 py-4 md:py-8 space-x-6 md:space-x-0 md:space-y-6 transition-transform duration-500 ${
          showNav
            ? "translate-y-0 md:translate-x-0"
            : "-translate-y-full md:translate-y-0 md:translate-x-full"
        }`}
      >
        <a href="#home" className="text-red-800 hover:text-red-950">
          Home
        </a>
        <a href="#about" className="text-red-800 hover:text-red-950">
          About
        </a>
        <a href="#work" className="text-red-800 hover:text-red-950">
          Work
        </a>
        <a href="#notes" className="text-red-800 hover:text-red-950">
          Notes
        </a>
        <a href="#contact" className="text-red-800 hover:text-red-950">
          Contact
        </a>
      </aside>

      {/* Body */}
      <div className="flex-1 flex flex-col">
        <main
          id="home"
          className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20"
        >
          {/* Hero Section */}
          <section
            id="home"
            className="flex flex-col items-center justify-center px-6 md:px-20 py-10"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Hero Image */}
              <div className="w-full flex justify-center mb-4 md:mb-0">
                <Image
                  src="/hero-image-1.jpg"
                  alt="Hero Image"
                  width={500}
                  height={400}
                  className="shadow-lg"
                />
              </div>

              {/* Mobile title: below image */}
              <div className="flex md:hidden justify-end w-full mt-2 px-4">
                <h1 className="text-4xl font-heading text-red-900 leading-none">
                  husna samer.
                </h1>
              </div>

              {/* Desktop title: right of image */}
              <div className="hidden md:flex flex-col justify-end md:ml-6 h-[400px]">
                <h1 className="text-7xl font-heading text-red-900 leading-none">
                  husna
                </h1>
                <h1 className="text-7xl font-heading text-red-900 leading-none self-start">
                  samer.
                </h1>
              </div>
            </div>
          </section>
        </main>
        {/* About Section */}
        <section id="about" className="bg-white py-20 px-6 md:px-20">
          <h2 className="text-5xl font-heading text-red-900 mb-12">
            husna samer.
          </h2>
          <div className="flex flex-col space-y-8 ml-4 md:ml-12 md:max-w-[60%]">
            <p className="font-body text-gray-500 text-justify text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vel laoreet nisl. Praesent feugiat, lectus eu porta porta, neque
              eros fringilla justo, nec tincidunt ipsum risus ultricies ante.
              Aliquam commodo dolor et sem pretium, sed ultricies augue
              fringilla. Vestibulum sit amet elit accumsan, maximus quam vel,
              tempor turpis. Donec et turpis id est scelerisque elementum. Nam
              aliquet rhoncus turpis, faucibus sollicitudin purus cursus at.
            </p>
            <p className="font-body text-gray-500 text-justify text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vel laoreet nisl. Praesent feugiat, lectus eu porta porta, neque
              eros fringilla justo, nec tincidunt ipsum risus ultricies ante.
              Aliquam commodo dolor et sem pretium, sed ultricies augue
              fringilla. Vestibulum sit amet elit accumsan, maximus quam vel,
              tempor turpis. Donec et turpis id est scelerisque elementum. Nam
              aliquet rhoncus turpis, faucibus sollicitudin purus cursus at.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="bg-white py-20 px-6 md:px-20">
          <h2 className="text-5xl font-heading text-red-900 mb-10">
            work &gt; 2025
          </h2>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col justify-end">
              <div className="h-[300px] w-full mb-4 relative">
                <Image
                  src="/alienate.jpg"
                  alt="alienate in 2025"
                  fill
                  className="object-contain object-left mb-4"
                />
              </div>
              <p className="text-left font-body text-gray-600 text-base md:text-lg">
                Caption for project 1
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col justify-end">
              <div className="h-[300px] w-full mb-4 relative">
              <Image
                src="/piece-2025.jpg"
                alt="piece 2 in 2025"
                fill
                className="object-contain object-left mb-4"
              />
              </div>
              <p className="text-left font-body text-gray-600 text-base md:text-lg">
                Caption for project 2
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
