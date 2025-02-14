import Card from "@/components/Card";
import feature1 from '../../public/features/feature1.png';
import feature2 from '../../public/features/feature2.png';
import feature3 from '../../public/features/feature3.png';
import feature4 from '../../public/features/feature4.png';

function FeatureSection() {
  const cards = [
    {
      image: feature1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      image: feature2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      image: feature3,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
    {
      image: feature4,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
    },
  ];

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/background_feature.png')` }}>
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <p className="text-blue-800 font-semibold text-base sm:text-lg md:text-xl">Lorem Ipsum</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-heading-1 font-bold mt-2">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
            donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam.
          </p>

          {/* Responsive Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureSection;
