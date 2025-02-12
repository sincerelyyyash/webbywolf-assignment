'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from "@/components/Navbar";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import bike1 from "@/../public/bike1.png";
import bike2 from '@/../public/bike2.jpg'
import business from "@/../public/business.jpg";
import businessLogo from "@/../public/Sure-Drive-Assist-final-logo-01 3.png";
import Logo from "@/components/Logo";
import background1 from "@/../public/relaxationtwelve_Create_a_hand-drawn_style_digital_artwork_feat_c3b7ba59-626d-4008-b50b-7a43efb87bcf 1.png";
import background2 from "@/../public/blvkbeats_a_lofi_animie_room_that_has_many_drum_machines_and_ke_f29fb2ca-7188-4318-9334-b9054c20e415 1.png";
import BrandSection from "@/components/BrandSection";
import AppPromo from "@/components/AppPromo";
import FeatureSection from "@/components/FeatureSection";
import { FaArrowRight } from "react-icons/fa";
import bikeImage from "@/../public/chirodc_Two_motorcyclist_greeting_eachother_on_a_spring_day_on__88d34b3c-4d7d-4937-b6d1-5364d3ae9b18 1.png";
import Footer from "@/components/Footer";
import bike3 from "@/../public/bike3.png";
import handshakeImg from "@/../public/handshake.png";
import { useState } from "react";
import AccordionComp from "@/components/Accordion";
import RequestQuoteForm from "@/components/QuoteForm";
import image1 from '@/../public/prabheshsharma_A_hyper-realistic_camera_raw_image_of_two_middle_480d91ab-2d67-4562-a5e9-f947be7de28f 1.png';
import MotorcycleGallery from "@/components/BikeGallerySection";
import TestimonialSlider from "@/components/TestimonialSection";

const tabs = [
  {
    name: "Research",
    content: "Conduct in-depth analysis and collect valuable insights to guide strategic decisions.",
  },
  {
    name: "Plan",
    content: "Create a structured roadmap to efficiently achieve objectives and goals.",
  },
  {
    name: "Design",
    content: "Transform ideas into visually appealing and functional solutions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div className="ml-28 relative min-h-screen">
        <motion.div variants={itemVariants}>
          <Navbar />
        </motion.div>

        <div className="flex items-center justify-between">
          <motion.div className="w-[50%]" variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} ref={ref}>
            <motion.h1 variants={itemVariants} className="font-bold text-heading-1 font-roboto-condensed text-gray-900">
              Lorem ipsum dolor <br /> sit amet
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 text-typography max-w-lg text-subheading-2">
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 flex">
              <input type="text" placeholder="Enter your email" className="w-full max-w-sm px-4 py-3 rounded-md border border-gray-300 focus:outline-none" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-2 flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Submit <HiArrowRight className="ml-2" />
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center mt-4 text-gray-700">
              <HiCheckCircle className="text-blue-600 w-6 h-6 mr-2" />
              <p>No credit card required!</p>
            </motion.div>
          </motion.div>

          <motion.div className="w-[50%] h-full flex-grow-0 relative" variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } } }}>
            <div className="absolute inset-0 bg-gray-900 opacity-50 md:hidden"></div>
            <div className="w-full h-[1000px] bg-cover bg-center relative" style={{ backgroundImage: "url('/car1.png')", clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }}></div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="bg-gradient-to-r from-blue-600 via-green-800 to-violet-950 py-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: "anticipate" }} />

      <motion.div className="ml-28 min-h-screen flex flex-col" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="flex items-center justify-between gap-8 py-12">
          <div className="max-w-3xl">
            <h3 className="text-subheading-1 font-semibold text-blue-800">LOREM IPSUM</h3>
            <h1 className="text-heading-1 font-bold">LOREM IPSUM <br /> DOLOR SIT AMET</h1>
            <p className="mt-4 text-subheading-2">Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.</p>

            <div className="mt-8 space-y-6">
              {[{ img: bike2, text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat." }, { img: bike2, text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis." }, { img: bike2, text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt." }].map((item, index) => (
                <motion.div key={index} className="flex items-center space-x-4 max-w-xl" variants={itemVariants}>
                  <Image src={item.img} alt="bike" className="w-24 h-24 rounded-lg object-cover" width={24} height={24} />
                  <p className="text-subheading-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-8 mt-20">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-md shadow hover:bg-blue-800 transition">
                Loerum Ipsum <HiArrowRight className="ml-2" />
              </motion.button>

              <div className="flex items-center space-x-2 text-blue-700">
                <FaPhone className="w-5 h-5" />
                <span className="text-lg">123456789</span>
              </div>
            </div>
          </div>

          <motion.div className="flex justify-self-end" variants={slideUp}>
            <Image src={bike1} alt="Motorcycles" className="shadow-lg" width={600} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="bg-gradient-to-r from-blue-600 via-green-800 to-violet-950 py-2" />

      <motion.div className="ml-28 bg-white min-h-screen flex flex-col" variants={containerVariants} initial="hidden" whileInView="visible">
        <div className="flex items-center justify-between gap-8 py-12">
          <div className="max-w-3xl">
            <h2 className="text-blue-800 text-subheading-1 font-semibold">Lorem ipsum dolor sit amet</h2>
            <h1 className="text-heading-1 font-bold mt-2">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h1>
            <p className="text-gray-600 mt-4 text-lg">Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.</p>

            <div className="mt-8 space-y-6">
              {[1, 2, 3].map((_, index) => (
                <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                  <Image src={businessLogo} alt="icon" className="w-9 h-9" width={8} height={8} />
                  <div>
                    <p className="font-semibold text-subheading-1">Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</p>
                    <p className="text-subheading-2">Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="flex justify-self-end" variants={slideUp}>
            <Image src={business} alt="Business discussion" width={600} height={400} className="shadow-lg" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="bg-gradient-to-r from-blue-600 via-green-800 to-violet-950 py-2 m-44" />

      <motion.div className="relative w-full h-screen" variants={fadeIn}>
        <div className="absolute inset-0">
          <Image src={background1} alt="Motorcycle riders" layout="fill" objectFit="cover" className="w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 h-full">
          <div className="absolute top-12 left-12">
            <Logo />
          </div>

          <h1 className="text-heading-1 font-bold uppercase max-w-6xl">Lorem Ipsum Dolor Sit Amet Consectetur. Quis Adipiscing Purus Egestas Aliquam Viverra Mi.</h1>

          <p className="max-w-3xl text-subheading-2 mt-6">Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.</p>

          <p className="max-w-3xl text-subheading-2 mt-6">Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.</p>
        </div>
      </motion.div>

      <BrandSection />

      <FeatureSection />

      <motion.div className="relative w-full h-screen" variants={fadeIn}>
        <div className="absolute inset-0">
          <Image src={background2} alt="Motorcycle riders" layout="fill" objectFit="cover" className="w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 h-full">
          <div className="absolute top-12 left-12">
            <Logo />
          </div>

          <h1 className="text-heading-1 font-bold uppercase max-w-5xl">dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing</h1>
        </div>
      </motion.div>

      <div className="min-h-screen flex items-center justify-center mx-28">
        <RequestQuoteForm />
      </div>

      <AppPromo />
      <div className="relative pt-32">
        <section className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="w-full md:w-4/5 relative">
            <div className="absolute top-[-100px] md:top-[-350] left-0 w-full">
              <Image src={bikeImage} alt="Two bikers on a road" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>

          <div className="w-full p-12 shadow-lg rounded-lg relative z-10 mt-20">
            <p className="text-blue-600 text-subheading-1 font-semibold">Lorem ipsum</p>
            <h1 className="text-heading-1 font-bold text-gray-900"><span className="text-blue-700">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.</h1>
            <p className="mt-4 text-subheading-2">Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.</p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-subheading-2 font-semibold">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 md:mt-16 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
              Lorem Ipsum <FaArrowRight />
            </motion.button>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 via-green-800 to-violet-950 py-2 mt-28" />
      </div>
      <TestimonialSlider />
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 my-40">
        <div className="max-w-xl text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">LOREM IPSUM DOLOR SIT AMET</h2>

          <div className="mt-4 flex border border-gray-300 rounded-lg overflow-hidden">
            {tabs.map((tab) => (
              <motion.button key={tab.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`w-1/3 py-2 px-4 font-medium border-r last:border-none transition ${activeTab.name === tab.name ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"}`} onClick={() => setActiveTab(tab)}>
                {tab.name}
              </motion.button>
            ))}
          </div>

          <p className="text-gray-600 mt-4">{activeTab.content}</p>

          <a href="#" className="mt-6 inline-flex items-center text-blue-600 font-semibold">Check
            tools ?
          </a>
        </div>

        <motion.div className="mt-10 md:mt-0 md:w-1/2 flex justify-end" variants={slideUp}>
          <Image
            src={handshakeImg}
            alt="Handshake"
            className="rounded-lg shadow-lg"
            width={500}
            height={300}
          />
        </motion.div>
      </section>

      <section className="relative py-16 px-6 lg:px-20 mx-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-heading-1 font-bold text-blue-800 uppercase">
              Lorem Ipsum Dolor Sit Amet Consectetur. Dignissim Tellus.
            </h1>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
              laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
              ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
              Massa in facilisis semper libero eget eu quisque bibendum platea.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
            >
              Loerum Ipsum ?
            </motion.button>
          </div>

          <motion.div className="relative" variants={slideUp}>
            <div className="relative w-full h-[350px] lg:h-[450px]">
              <Image
                src={image1}
                alt="People with scooter"
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute left-10 bottom-[-200px] bg-white p-6 rounded-lg shadow-lg max-w-md z-10"
          variants={itemVariants}
        >
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
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-green-500 to-purple-800 z-0"></div>
      </section>

      <section className="flex flex-col items-center text-center py-16 px-6 lg:mt-80 lg:mb-40">
        <h2 className="text-heading-1 font-bold text-gray-900">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        <p className="text-gray-600 text-subheading-2 max-w-5xl mt-4">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>

        <div className="relative flex flex-col md:flex-row md:items-center mt-12 max-w-7xl">
          <motion.div className="relative w-full md:w-2/3" variants={slideUp}>
            <Image
              src={bike3}
              alt="Bikers in the mountains"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="relative md:absolute md:right-[-8%] md:top-1/2 md:translate-x-[20%] md:translate-y-[-50%] bg-white p-6 rounded-lg shadow-lg max-w-md text-left"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Artist & Investor
            </h3>
            <p className="text-gray-600 mt-3">
              Enim sagittis, sit porttitor morbi lobortis amet, libero
              adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
              Egestas ac arcu amet nisl quis est ...
            </p>

            <a href="#" className="mt-4 inline-flex items-center text-blue-600 font-semibold">
              Read Full Story <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      <AccordionComp />

      <section className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-3xl mx-auto space-y-8">
        <Logo />

        <h1 className="text-heading-1 font-bold">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </h1>

        <p className="text-subheading-2 max-w-2xl mt-4">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
        >
          Lorem Ipsum <FaArrowRight />
        </motion.button>
      </section>

      <Footer />
    </motion.div>
  );
}
