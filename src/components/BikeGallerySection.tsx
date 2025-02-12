'use client';
import Image from 'next/image';
import { FC } from 'react';

const images = [
  '/motorcycle/motorcycle1.png',
  '/motorcycle/motorcycle2.png',
  '/motorcycle/motorcycle3.png',
  '/motorcycle/motorcycle4.png',
  '/motorcycle/motorcycle5.png',
  '/motorcycle/motorcycle6.png',
  '/motorcycle/motorcycle7.png',
  '/motorcycle/motorcycle8.png',
];

const MotorcycleGallery: FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Left Content */}
        <div className="w-1/3">
          <h4 className="text-gray-600 font-semibold uppercase tracking-wide">NO LIMITS</h4>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            LOREM IPSUM<br />
            DOLOR SIT AMET
          </h2>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur. Nisi<br />
            faucibus vitae porttitor pharetra tempor quis arcu.<br />
            Ipsum nullam.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition-all">
            Loerum Ipsum <span className="text-xl">?</span>
          </button>
        </div>

        {/* Right Gallery Grid */}
        <div className="w-2/3 relative h-[800px]">
          {/* Image 1 (Top-left small) */}
          <div className="absolute top-0 left-0 w-[135px] h-[210px]">
            <Image
              src={images[0]}
              alt="Motorcycle 1"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Image 2 (Top-right large) */}
          <div className="absolute top-0 right-0 w-[459px] h-[240px]">
            <Image
              src={images[1]}
              alt="Motorcycle 2"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Image 3 (Left-middle) */}
          <div className="absolute top-[280px] left-0 w-[135px] h-[241px]">
            <Image
              src={images[2]}
              alt="Motorcycle 3"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Image 4 (Right-middle large) */}
          <div className="absolute top-[240px] right-0 w-[624px] h-[312px]">
            <Image
              src={images[3]}
              alt="Motorcycle 4"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Image 5 (Bottom-right medium) */}
          <div className="absolute bottom-[120px] right-0 w-[459px] h-[240px]">
            <Image
              src={images[4]}
              alt="Motorcycle 5"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Image 6 (Bottom-left medium) */}
          <div className="absolute bottom-[140px] left-0 w-[459px] h-[239px]">
            <Image
              src={images[5]}
              alt="Motorcycle 6"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Image 7 (Bottom-left small) */}
          <div className="absolute bottom-0 left-[160px] w-[135px] h-[210px]">
            <Image
              src={images[6]}
              alt="Motorcycle 7"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Image 8 (Bottom-right small) */}
          <div className="absolute bottom-0 right-[100px] w-[135px] h-[231px]">
            <Image
              src={images[7]}
              alt="Motorcycle 8"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorcycleGallery;
