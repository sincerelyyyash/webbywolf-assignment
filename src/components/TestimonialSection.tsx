'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/user/User1.png',
  '/user/User2.png',
  '/user/User3.png',
  '/user/User4.png',
];

interface TestimonialAuthor {
  name: string;
  avatarUrl: string;
}

interface TestimonialCard {
  id: number;
  text: string;
  author: TestimonialAuthor;
}

const testimonials: TestimonialCard[] = [
  {
    id: 1,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: { name: "Jane Cooper", avatarUrl: images[0] },
  },
  {
    id: 2,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: { name: "Ralph Edwards", avatarUrl: images[1] },
  },
  {
    id: 3,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    author: { name: "Courtney Henry", avatarUrl: images[2] },
  },
  {
    id: 4,
    text: "Hendrerit augue ut mi quis integer netus. Sed rhoncus magnis habitasse. Egestas amet habitasse tellus ornare. Hendrerit senectus. Mauris eget vitae praesent neque.",
    author: { name: "Cameron Wilson", avatarUrl: images[3] },
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => setCurrentSlide((prev) => Math.max(0, prev - 1));
  const handleNextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, testimonials.length - 4));

  return (
    <section className="bg-blue-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-100 text-lg">Join other Sun harvesters</span>
            <h2 className="text-white text-4xl font-bold mt-2">LOREM IPSUM DOLOR SIT AMET</h2>
            <p className="text-blue-100 mt-4 max-w-xl">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>
          <button className="bg-white px-6 py-2 rounded-lg text-gray-900">Lorem Ipsum</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-8 flex flex-col transform transition-transform duration-300 hover:scale-105">
              <div className="mb-6">
                {testimonial.id === 1 && (
                  <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {testimonial.id === 2 && (
                  <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {testimonial.id === 3 && (
                  <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 7h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" strokeWidth="2" />
                  </svg>
                )}
                {testimonial.id === 4 && (
                  <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>

              <p className="text-gray-600 flex-grow mb-6">{testimonial.text}</p>

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image src={testimonial.author.avatarUrl} alt={testimonial.author.name} fill className="rounded-full object-cover" />
                </div>
                <span className="font-medium text-gray-900">{testimonial.author.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrevSlide}
            disabled={currentSlide === 0}
            className="p-4 rounded-full border border-white/30 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            disabled={currentSlide >= testimonials.length - 4}
            className="p-4 rounded-full border border-white/30 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

