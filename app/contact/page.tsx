"use client";

import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-stone-800 text-orange-50 px-6 md:px-20 py-20 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-5xl font-heading my-12 text-left">Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column — Contact Info */}
            <div className="space-y-8 text-orange-100">
              <div>
                <h2 className="text-2xl font-heading-thin font-semibold mb-4">Get in touch</h2>
              </div>

              <div className="space-y-4 text-orange-100">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-100" />
                  <span className="font-heading-thin">samerhusna@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-100" />
                  <span className="font-heading-thin">Abu Dhabi, U.A.E.</span>
                </div>
              </div>

              <div className="flex gap-6 mt-6">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column — Contact Form */}
            <form className="space-y-6 p-8 border border-stone-600 rounded-2xl shadow-lg">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-heading-thin">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full p-3 rounded bg-stone-800 text-white border border-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-heading-thin">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 rounded bg-stone-800 text-white border border-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-heading-thin">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 rounded bg-stone-800 text-white border border-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-300"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-stone-950 hover:bg-stone-900 text-stone-300 font-heading-thin font-semibold rounded transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
