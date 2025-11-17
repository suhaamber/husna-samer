import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-800 text-orange-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* ---------------------- BIO ---------------------- */}
        <section id="bio" className="space-y-10">
          <h1 className="font-heading text-4xl pt-10">About</h1>

          <p className="font-body leading-relaxed text-lg text-orange-100">
            Husna Samer is a UAE-based artist whose practice has evolved through
            years of mentorship, each shaping her exploration of how the meaning
            of home shifts within an increasingly global and migratory context,
            altering our perception of memory and consequently of the desired
            self.
          </p>

          <p className="font-body leading-relaxed text-lg text-orange-100">
            For Samer, memory is both collective and personal, it plays a vital
            role in reshaping the boundaries of identity. Her work approaches
            this self as a mutable vessel of experience, where memory gathers,
            erodes, and transforms. Guided by an instinctive pull toward blues
            and reds, she constructs emotive, layered compositions that
            oscillate between serenity and intensity.
          </p>

          <p className="font-body leading-relaxed text-lg text-orange-100">
            Rooted in an inclination toward symbolism and surrealism, Samer’s
            paintings often navigate the thresholds between the seen and the
            felt, suggesting inner landscapes rather than depicting literal
            ones. Beneath these shifting forms lies an undertone of the Romantic
            movement, visible in her pursuit of emotional depth, atmosphere, and
            the sublime. Through texture, color, and gesture, she invites
            viewers into spaces where meaning unfolds between remembering and
            forgetting, self and surrounding, permanence and change.
          </p>
        </section>

        {/* ---------------------- PRESS ---------------------- */}
        <section id="press" className="space-y-10">
          <h2 className="font-heading text-3xl">Press</h2>

          <ul className="space-y-6">
            <li className="font-body text-orange-100 text-lg">
              <span className="font-heading-thin">Publication Name</span> —
              Article title or short description goes here.
            </li>

            <li className="font-body text-orange-100 text-lg">
              <span className="font-heading-thin">Publication Name</span> —
              Another placeholder entry for press.
            </li>

            <li className="font-body text-orange-100 text-lg">
              <span className="font-heading-thin">Magazine / Blog</span> — Write
              the summary here.
            </li>
          </ul>
        </section>

        {/* ---------------------- EXHIBITIONS ---------------------- */}
        <section id="exhibitions" className="space-y-10">
          <h2 className="font-heading text-3xl">Exhibitions</h2>

          {/* Two side-by-side images on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full h-[300px] bg-neutral-800 rounded-lg flex items-center justify-center">
              <p className="font-body text-orange-200 text-sm opacity-60">
                Image Placeholder
              </p>
            </div>
            <div className="w-full h-[300px] bg-neutral-800 rounded-lg flex items-center justify-center">
              <p className="font-body text-orange-200 text-sm opacity-60">
                Image Placeholder
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <div>
              <p className="font-heading-thin text-xl">
                Exhibition Title — 2023
              </p>
              <p className="font-body text-orange-100">
                Location, Gallery Name, Short blurb about the exhibition.
              </p>
            </div>

            <div>
              <p className="font-heading-thin text-xl">
                Exhibition Title — 2022
              </p>
              <p className="font-body text-orange-100">
                Location, Gallery Name, Short blurb about the exhibition.
              </p>
            </div>

            <div>
              <p className="font-heading-thin text-xl">
                Exhibition Title — 2020
              </p>
              <p className="font-body text-orange-100">
                Additional details or description.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
