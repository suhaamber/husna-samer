"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // handle scroll behavior for hide/show and gradient
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scrolling down → hide navbar
      } else {
        setShowNav(true); // scrolling up → show navbar
      }

       // add gradient background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-b from-stone-900/80 to-transparent backdrop-blur-sm"
          : "bg-transparent"
      } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <ul className="flex justify-evenly py-6 text-orange-50 font-heading-thin italic tracking-widest text-sm sm:text-base md:text-lg">
        <li>
          <Link href="/#home" className="hover:text-orange-300">
            home
          </Link>
        </li>
        <li>
          <Link href="/work" className="hover:text-orange-300">
            work
          </Link>
        </li>
        <li>
          <Link href="/notes" className="hover:text-orange-300">
            notes
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-orange-300">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
