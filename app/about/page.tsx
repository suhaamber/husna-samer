import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-800 text-orange-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* ---------------------- BIO ---------------------- */}
        <FadeInWhenVisible>
          <section id="bio" className="space-y-10">
            <h1 className="font-heading text-4xl pt-10">About</h1>

            <p className="font-body leading-relaxed text-xl text-stone-100 text-justify">
              Husna Samer is a UAE-based artist whose practice has evolved
              through years of mentorship, each shaping her exploration of how
              the meaning of <i>home</i> shifts within an increasingly global
              and migratory context, altering our perception of memory and
              consequently of the desired self.
            </p>

            <p className="font-body leading-relaxed text-xl text-stone-100 text-justify">
              For Samer, memory is both collective and personal, it plays a
              vital role in reshaping the boundaries of identity. Her work
              approaches this <i>self</i> as a mutable vessel of experience,
              where memory gathers, erodes, and transforms. Guided by an
              instinctive pull toward blues and reds, she constructs emotive,
              layered compositions that oscillate between serenity and
              intensity.
            </p>

            <p className="font-body leading-relaxed text-xl text-stone-100 text-justify">
              Rooted in an inclination toward symbolism and surrealism, Samer’s
              paintings often navigate the thresholds between the seen and the
              felt, suggesting inner landscapes rather than depicting literal
              ones. Beneath these shifting forms lies an undertone of the
              Romantic movement, visible in her pursuit of emotional depth,
              atmosphere, and the sublime. Through texture, color, and gesture,
              she invites viewers into spaces where meaning unfolds between
              remembering and forgetting, self and surrounding, permanence and
              change.
            </p>
          </section>
        </FadeInWhenVisible>

        {/* ---------------------- EXHIBITIONS ---------------------- */}
        <FadeInWhenVisible>
          <section id="exhibitions" className="space-y-10">
            <h2 className="font-heading text-2xl md:text-3xl">Exhibitions</h2>

            <div className="space-y-16 pt-4">
              <div>
                <Link
                  href="https://thaerselect.com/artists/61-husna-samer/"
                  target="_blank"
                  className="font-heading-thin text-xl hover:underline transition inline-flex items-center gap-2"
                >
                  Mirage — Nov/Dec 2025{" "}
                  <span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </Link>
                <p className="font-body text-stone-100 text-lg">
                  Youngest exhibiting artist; A group show curated by Nicolo
                  Venelli{" "}
                  <a href="https://vertygo.art" target="_blank" className="underline">
                    (Vertygo Art)
                  </a>{" "}
                  and Moustafa Thaer{" "}
                  <a href="https://thaerselect.com" target="_blank" className="underline">
                    (Thaer.Select)
                  </a>{" "}
                  and hosted by Erth Hotel, part of ADAF Satellite 2025. The show
                  reflects on how perception is shaped by displacement, memory,
                  and desire.
                </p>
              </div>

              <div>
                <Link
                  href="https://iicabudhabi.esteri.it/it/gli_eventi/calendario/here-we-are-mostra-darte-contemporanea-dal-24-ottobre-al-7-novembre/"
                  target="_blank"
                  className="font-heading-thin text-xl hover:underline transition inline-flex items-center gap-2"
                >
                  Here We Are — Oct/Nov 2024
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <p className="font-body text-stone-100 text-lg">
                  Youngest exhibiting artist; A research-based show curated by
                  Vania Rontini and hosted by the Italian Cultural Institute in
                  collaboration with ZU’s CACE, which explored themes of home
                  and belonging in multicultural contexts
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="w-full h-[300px] bg-neutral-800 rounded-lg overflow-hidden">
                  <img
                    src="/archive/archives (10).jpg"
                    alt="from the archives"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full h-[300px] bg-neutral-800 rounded-lg overflow-hidden">
                  <img
                    src="/archive/archives (11).jpg"
                    alt="from the archives"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="font-heading-thin text-xl">
                  Mawhibaty — 2021-2023
                </p>
                <p className="font-body text-stone-100 text-lg">
                  Exhibited at Manarat Al Saadiyat through Mawhibaty, Abu Dhabi
                </p>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* ---------------------- PRESS ---------------------- */}
        <FadeInWhenVisible>
          <section id="press" className="space-y-10">
            <h2 className="font-heading text-2xl md:text-3xl">Press</h2>

            <ul className="space-y-6">
              <li className="font-body text-stone-100 text-lg">
                <Link
                  href="https://www.gulftoday.ae/Culture/2024/11/01/Italian-Cultural-Institute-Abu-Dhabi-and-CACE-ZU-host-Here-We-Are"
                  target="_blank"
                  className="font-heading-thin hover:underline transition inline-flex items-center gap-2"
                >
                  Gulf Today
                  <ExternalLink className="w-4 h-4" />
                </Link>{" "}
                — Italian Cultural Institute Abu Dhabi and CACE ZU host ‘Here We
                Are’
                <p className="font-body text-stone-100 text-lg"></p>
              </li>

              <li className="font-body text-stone-100 text-lg hidden">
                <span className="font-heading-thin">Publication Name</span> —
                Another placeholder entry for press.
              </li>

              <li className="font-body text-stone-100 text-lg hidden">
                <span className="font-heading-thin">Magazine / Blog</span> —
                Write the summary here.
              </li>
            </ul>
          </section>
        </FadeInWhenVisible>
      </main>

      <Footer />
    </div>
  );
}
