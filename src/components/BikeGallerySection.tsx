'use client';
import Image from 'next/image';
import { FC } from 'react';
import { motion } from "framer-motion";

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
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-16 bg-gray-100 min-h-screen">
      {/* Left Section (Text) */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h4 className="text-gray-500 font-semibold uppercase tracking-wide">
          No Limits
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
          porttitor pharetra tempor quis arcu. Ipsum nullam.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 mx-auto lg:mx-0"
        >
          Lorem Ipsum →
        </motion.button>
      </div>

      {/* Right Section (Responsive Image Grid) */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 lg:mt-0">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`relative rounded-lg overflow-hidden 
              ${index === 2 ? "md:row-span-2 md:h-56" : "h-36"} 
              ${index === 1 || index === 5 ? "md:col-span-2" : ""}`}
          >
            <Image 
              src={src} 
              alt={`bike${index + 1}`} 
              fill 
              className="object-cover rounded-lg" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotorcycleGallery;
