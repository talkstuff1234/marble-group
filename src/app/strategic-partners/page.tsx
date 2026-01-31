import Image from "next/image";
import { assets } from "@/assets/assets";

export default function StrategicPartnersHero() {
  return (
    <section className="relative w-full min-h-[90vh] rounded-3xl overflow-hidden flex items-center">
      {/* Background image */}
      <Image
        src={assets.images.strategicPartnersHero} // replace with your actual hero image
        alt="Strategic Partners"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-light">
              Strategic Partners
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              Selected partners supporting Marble Group’s operations across key
              sectors.
            </p>
          </div>

          {/* Partner cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />
            {/* Card 2 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />
            {/* Card 3 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />
            {/* Card 4 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />

            {/* Card 5 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />
            {/* Card 6 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />
            {/* Card 7 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />
            {/* Card 8 */}
            <div className="h-24 rounded-xl bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
