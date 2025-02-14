"use client";
import Image from "next/image";
import hero from '@/../public/brands/Hero_MotoCorp.svg 1.png'
import honda from '@/../public/brands/Honda_Logo.svg 1.png'
import bajaj from '@/../public/brands/Bajaj-Auto-Logo 1.png'
import tvs from '@/../public/brands/TVS_Motor_Company_Logo 1.png'
import royal from '@/../public/brands/royal-enfield-logo-2014-present-1024x742 1.png'
import yamaha from '@/../public/brands/yamaha.png'
import ktm from '@/../public/brands/KTM-Logo.svg 1.png'
import ather from '@/../public/brands/AtherLogo 1.png'
import ola from '@/../public/brands/Ola-Electric 1.png'
import revolt from '@/../public/brands/revolt.png'
import ultra from '@/../public/brands/Ultraviolette_Logo 1.png'
import tork from '@/../public/brands/tork.png'

const brands = [
  { src: hero, alt: "Hero" },
  { src: honda, alt: "Honda" },
  { src: bajaj, alt: "Bajaj" },
  { src: tvs, alt: "TVS" },
  { src: royal, alt: "Royal Enfield" },
  { src: yamaha, alt: "Yamaha" },
  { src: ktm, alt: "KTM" },
  { src: ather, alt: "Ather" },
  { src: ola, alt: "Ola Electric" },
  { src: revolt, alt: "Revolt" },
  { src: ultra, alt: "Ultraviolette" },
  { src: tork, alt: "Tork Motors" },
];

export default function BrandSection() {
  return (
    <div className="py-16 bg-white text-center">
      {/* Title */}
      <h2 className="text-xl md:text-heading-1 font-bold mb-6 md:mb-12 px-4">
        LOREM IPSUM DOLOR SIT AMET <br className="hidden md:block" /> CONSECTETUR. COMMODO LEO AMET.
      </h2>

      {/* Responsive Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-14 lg:gap-16 max-w-6xl mx-auto px-4">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={brand.src}
              alt={brand.alt}
              width={120}
              height={100}
              className="w-20 h-auto md:w-28 lg:w-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
