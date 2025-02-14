import { motion } from "framer-motion";
import Image from "next/image";

export default function MotorcycleSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gray-100 min-h-screen">
      {/* Left Section (Text) */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h4 className="text-gray-500 font-semibold uppercase tracking-wide">
          No Limits
        </h4>
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-700 text-lg max-w-md mx-auto lg:mx-0">
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

      {/* Right Section (Image Grid) */}
      <div className="lg:w-1/2 grid grid-cols-3 grid-rows-3 gap-4 mt-12 lg:mt-0">
        <Image src="/bike1.jpg" alt="bike1" className="w-full h-40 object-cover rounded-lg" />
        <Image src="/bike2.jpg" alt="bike2" className="w-full h-40 object-cover rounded-lg col-span-2" />
        <Image src="/bike3.jpg" alt="bike3" className="w-full h-60 object-cover rounded-lg row-span-2" />
        <Image src="/bike4.jpg" alt="bike4" className="w-full h-40 object-cover rounded-lg" />
        <Image src="/bike5.jpg" alt="bike5" className="w-full h-40 object-cover rounded-lg" />
        <Image src="/bike6.jpg" alt="bike6" className="w-full h-40 object-cover rounded-lg col-span-2" />
      </div>
    </section>
  );
}
