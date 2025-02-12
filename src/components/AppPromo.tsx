"use client";
import Image from "next/image";
import google1 from '@/../public/AppPromo/Google_Play_Store_badge_EN.svg 1.png'
import google2 from '@/../public/AppPromo/Download_on_the_App_Store_Badge.svg 1.png'
import phone from '@/../public/AppPromo/Photo.png'


function AppPromo() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-blue-600 font-semibold text-lg">Lorem Ipsum</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi 
            suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. 
            Pellentesque ultricies ipsum.
          </p>

          {/* App Store & Play Store Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Image src={google1} alt="Google Play" width={140} height={50} />
            <Image src={google2} alt="App Store" width={140} height={50} />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src={phone}
            alt="Hand Holding Phone"
            width={800}
            height={400}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AppPromo;