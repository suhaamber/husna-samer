"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import FadeInWhenVisible from "@/app/components/FadeInWhenVisible";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MemoryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Replace these with your actual image filenames
  const images = Array.from({ length: 20 }).map(
    (_, i) => `/memory/${i + 1}.jpg`
  );

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  };

  return (
    <div className="bg-stone-800 min-h-screen">
      <section className="px-6 md:px-20 py-16 ">
        <Navbar />
        <FadeInWhenVisible>
          <div className="pt-12 mb-12">
            <Link
              href="/work"
              className="text-base md:text-xl uppercase font-heading underline tracking-widest text-stone-400 mb-2"
            >
              Work
            </Link>
            <h1 className="text-2xl md:text-4xl font-heading mb-6 text-stone-300">
              A New Truth: On Rayan’s Memory Work
            </h1>
            <p className="text-base font-body md:text-lg text-stone-300 leading-relaxed max-w-3xl">
              A written project that explores the emotional landscapes within{" "}
              <a
                href="https://www.instagram.com/ray.alj/"
                className="underline"
              >
                Rayan Aljneibi’s
              </a>{" "}
              photographs - where memory begins to morph. In my time with Rayan,
              I've picked up her graceful habit of not just capturing new
              memories, but returning to old ones with a different tenderness
              each time. So much of her work teaches us to slow down. To
              remember with presence. To forget softly.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Memory ${index + 1}`}
              className="w-full mb-6 rounded-lg shadow-lg hover:opacity-90 hover:cursor-pointer transition-all"
              loading="lazy"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-stone-800/90 flex items-center justify-center z-50">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-orange-50 hover:text-orange-400 text-6xl font-bold"
            >
              &#8592;
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-6 text-orange-50 hover:text-orange-400 text-6xl font-bold"
            >
              &#8594;
            </button>

            {/* Image and Close Button */}
            <div className="relative flex items-center">
              <img
                src={images[selectedIndex]}
                alt={`Artwork ${selectedIndex + 1}`}
                className="max-w-[80vw] max-h-[80vh] rounded-lg"
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-20 right-0 text-orange-50 hover:text-orange-400 text-6xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="pt-12">
          <Link
            href="/work"
            className="text-base md:text-xl uppercase font-heading underline tracking-widest text-stone-400 pt-8"
          >
            back to work
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
