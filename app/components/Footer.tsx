export default function Footer() {
  return (
    <section
      id="contact"
      className="bg-stone-800 text-orange-50 py-12 px-6 md:px-20"
    >
      {/* Divider line */}
      <div className="border-t border-orange-100 opacity-40 mb-8"></div>

      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center text-sm md:text-base">
        {/* Left: Email */}
        <a
          href="mailto:samerhusna@gmail.com"
          className="hover:underline hover:text-orange-300 font-heading tracking-widest mb-4 md:mb-0"
        >
          samerhusna@gmail.com
        </a>

        {/* Right: Credit */}
        <div className="flex space-x-6 font-heading">
          {/* Credits */}
          <p
            className="mb-4 md:mb-0"
          >
            web design by Suha Amber
          </p>
        </div>
      </div>
    </section>
  );
}
