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
          <div className="mt-14 flex flex-col gap-6">
            {/* TOP ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6">
                <Image
                  src={assets.images.strategicImage1}
                  alt=""
                  className="max-h-24 object-contain"
                />
              </div>

              <div className="h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6">
                <Image
                  src={assets.images.strategicImage2}
                  alt=""
                  className="max-h-12 object-contain"
                />
              </div>

              <div className="h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6">
                <Image
                  src={assets.images.strategicImage3}
                  alt=""
                  className="max-h-12 object-contain"
                />
              </div>

              <div className="h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6">
                <Image
                  src={assets.images.strategicImage4}
                  alt=""
                  className="max-h-12 object-contain"
                />
              </div>
            </div>

            {/* BOTTOM ROW – CENTERED */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 w-full max-w-[520px]">
                <div className="h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6">
                  <Image
                    src={assets.images.strategicImage5}
                    alt=""
                    className="max-h-22 object-contain"
                  />
                </div>

                <div className="h-24 bg-white rounded-xl shadow-sm flex items-center justify-center px-6">
                  <Image
                    src={assets.images.strategicImage6}
                    alt=""
                    className="max-h-12 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
