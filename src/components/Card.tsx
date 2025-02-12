import Image from "next/image";

interface CardProps {
  image: any;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-3/4">
      <Image src={image} alt={title} width={400} height={250} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-subheading-2 font-semibold text-gray-900">{title}</h3>
        <p className="mt-2">{description}</p>
        <a href="#" className="text-blue-600 font-semibold mt-4 inline-block hover:border-b hover:text-blue-800 hover:border-b-blue-800">
          Learn More
        </a>
      </div>
    </div>
  );
}
