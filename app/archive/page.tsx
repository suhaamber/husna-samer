"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotesPage() {
  const images = Array.from({ length: 30 }, (_, i) => `/archive/archives%20(${i + 1}).jpg`);

  return (
    <div className="min-h-screen bg-stone-800">
      <Navbar />
      <section className="text-orange-50 max-w-5xl mx-auto px-6 py-20">
        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-heading my-10">archive</h1>

        {/* Masonry Grid */}
        <div className="columns-3 lg:columns-6 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Artwork ${index + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto rounded-lg hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

