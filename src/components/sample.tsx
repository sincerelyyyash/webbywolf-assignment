import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-800 uppercase leading-tight">
            Lorem Ipsum Dolor Sit Amet Consectetur. Dignissim Tellus.
          </h1>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit 
            laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt 
            ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. 
            Massa in facilisis semper libero eget eu quisque bibendum platea.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md flex items-center gap-2 hover:bg-blue-700 transition">
            Loerum Ipsum →
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative w-full h-[350px] lg:h-[450px]">
            <Image
              src="/image.png" // Change this to your actual image source
              alt="People with scooter"
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="absolute left-10 bottom-[-80px] bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h3 className="font-bold text-lg">Lorem ipsum dolor sit</h3>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
        </p>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit.
        </p>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi.
        </p>
      </div>

      {/* Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-green-500 to-purple-800"></div>
    </section>
  );
};

export default HeroSection;
