import Image from "next/image";

interface CardProps {
  image: any;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-auto md:h-56 object-cover"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600">{description}</p>
        <a
          href="#"
          className="text-blue-600 font-semibold mt-4 inline-block transition-all duration-300 hover:border-b-2 hover:text-blue-800 hover:border-blue-800"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
