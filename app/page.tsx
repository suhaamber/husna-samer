// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse bg-gray-50 font-body">
      {/* Sidebar / Right Menu */}
      <aside className="bg-white shadow-md flex md:flex-col flex-row justify-center md:justify-start items-center md:items-start w-full md:w-40 px-6 py-4 md:py-8 space-x-6 md:space-x-0 md:space-y-6">
        <a href="#home" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#work" className="text-gray-600 hover:text-gray-900">
          Work
        </a>
        <a href="#notes" className="text-gray-600 hover:text-gray-900">
          Notes
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </aside>

      {/* Hero Section */}
      <main
        id="home"
        className="flex-1 flex items-center justify-center px-6 md:px-20 py-10"
      >
        <div className="flex flex-col md:flex-row items-center md:items-end">
          {/* Hero Image */}
          <div className="md:w-full max-w-[600px] flex justify-center mb-10 md:mb-0 relative">
            <Image
              src="/hero-image-1.jpg"
              alt="Hero Image"
              width={500}
              height={400}
              className="shadow-lg"
            />

            {/* Mobile title: bottom-right over image */}
            <div className="absolute bottom-4 right-4 md:hidden">
              <h1 className="text-4xl font-heading text-white leading-none">
                husna samer.
              </h1>
            </div>
          </div>

          {/* Desktop title: right of image, two lines */}
          <div className="hidden md:flex flex-col justify-end md:pl-6 h-[400px]">
            <h1 className="text-7xl font-heading text-black leading-none">husna</h1>
            <h1 className="text-7xl font-heading text-black leading-none self-start">
              samer.
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
