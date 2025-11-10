"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import FadeInWhenVisible from "@/app/components/FadeInWhenVisible";
import Link from "next/link";

export default function MemoryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Replace these with your actual image filenames
  const images = Array.from({ length: 20 }).map(
    (_, i) => `/memory/${i + 1}.jpg`
  );

  return (
    <section className="px-6 md:px-20 py-16 bg-stone-900 min-h-screen">
      <FadeInWhenVisible>
        <div className="mb-12">
          <Link
            href="/work"
            className="text-base md:text-xl uppercase font-heading underline tracking-widest text-stone-400 mb-2"
          >
            Work
          </Link>
          <h1 className="text-2xl md:text-4xl font-heading mb-6">
            A New Truth: On Rayan’s Memory Work
          </h1>
          <p className="text-base font-body md:text-lg text-stone-300 leading-relaxed max-w-3xl">
            A written project that explores the emotional landscapes within{" "}
            <a href="https://www.instagram.com/ray.alj/" className="underline">
              Rayan Aljneibi’s
            </a>{" "}
            photographs - where memory begins to morph. In my time with Rayan,
            I've picked up her graceful habit of not just capturing new
            memories, but returning to old ones with a different tenderness each
            time. So much of her work teaches us to slow down. To remember with
            presence. To forget softly.
          </p>
        </div>
      </FadeInWhenVisible>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Memory ${i + 1}`}
            className="w-full mb-6 rounded-lg shadow-lg hover:opacity-90 hover:cursor-pointer transition-all"
            loading="lazy"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Modal Lightbox */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      >
        <div className="relative max-w-4xl mx-auto px-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-3/5 -right-10 transform -translate-y-1/2 text-orange-50 hover:text-orange-400 text-5xl"
          >
            &times;
          </button>

          <img
            src={selectedImage || undefined}
            alt="Selected work"
            className="max-h-[90vh] w-auto mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </Dialog>
      <div className="pt-12">
        <Link
          href="/work"
          className="text-base md:text-xl uppercase font-heading underline tracking-widest text-stone-400 pt-8"
        >
          back to work
        </Link>
      </div>
    </section>
  );
}
