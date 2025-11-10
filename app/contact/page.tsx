"use client";

import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | "sending" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    }

    // Reset to normal state after 6 seconds
    setTimeout(() => setStatus(null), 6000);
  };

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
                <h2 className="text-xl font-heading-thin font-semibold mb-4">
                  Get in touch
                </h2>
              </div>

              <div className="space-y-4 text-orange-100">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-100" />
                  <span className="font-heading-thin">
                    samerhusna@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-100" />
                  <span className="font-heading-thin">Abu Dhabi, U.A.E.</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-heading-thin font-semibold mb-2">
                  Follow my work
                </h2>
              </div>

              {/* Text-based social links */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-6 font-heading-thin text-orange-100 text-sm md:text-base">
                <a
                  href="https://www.instagram.com/hhnsmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.saatchiart.com/en-ae/account/profile/2295867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition underline"
                >
                  Saatchi Art
                </a>
                <a
                  href="https://substack.com/@husnasamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition underline"
                >
                  Substack
                </a>
              </div>
            </div>

            {/* Right Column — Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 border border-stone-600 rounded-2xl shadow-lg"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-heading-thin"
                >
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
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-heading-thin"
                >
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
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-heading-thin"
                >
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

              <div className="text-center">
                {status === "sending" && (
                  <button
                    type="button"
                    disabled
                    className="w-full py-3 bg-stone-800 text-stone-400 rounded font-heading-thin transition animate-fadeIn"
                  >
                    Sending...
                  </button>
                )}

                {status === "success" && (
                  <p className="w-full py-3 bg-green-800 text-green-200 rounded font-heading-thin animate-fadeIn">
                    Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="w-full py-3 bg-red-800 text-red-200 rounded font-heading-thin animate-fadeIn">
                    Something went wrong. Reach me at {" "}
                    <a
                      href="mailto:samerhusna@gmail.com"
                      className="underline hover:text-red-100"
                    >
                      artist@email.com
                    </a>
                  </p>
                )}

                {!status && (
                  <button
                    type="submit"
                    className="w-full py-3 bg-stone-950 hover:bg-stone-900 text-stone-300 font-heading-thin font-semibold rounded transition"
                  >
                    Send Message
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
