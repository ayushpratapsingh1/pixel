'use client';

import { useState, useEffect ,JSX} from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion } from 'framer-motion';

interface Work {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
}

const works: Work[] = [
  {
    "title": "Dental Clinic Website",
    "description": "Explore the official website of a trusted dental clinic in Himachal Pradesh, dedicated to delivering exceptional oral healthcare. The website highlights a range of services, including general dentistry, cosmetic treatments, orthodontics, and dental surgeries. It also showcases state-of-the-art equipment used for precise and painless procedures. Visitors can easily access contact details to schedule appointments or inquire about treatments, ensuring a seamless and informative experience.",
    "image": "/images/works/dental.jpg",
    "liveUrl": "https://sunrisedental.in"
  },
  {
    "title": "Stunning Photography Website",
    "description": "Dive into the captivating world of photography through this personal website of a talented photographer based in Jammu & Kashmir. The site showcases a profound collection of their finest works, including breathtaking landscapes, portraits, and event photography. It also highlights professional services offered for weddings, travel shoots, and commercial projects. With a seamless design and easy navigation, visitors can explore galleries and connect for bookings effortlessly.",
    "image": "/images/works/photography.jpg",
    "liveUrl": "https://example-photography.com"
  },
  {
    "title": "Personal Portfolio Website",
    "description": "Discover the personal portfolio of a passionate computer science undergraduate student, designed to showcase their technical skills and innovative projects. The website features detailed descriptions of completed work, including web development, data science, and machine learning applications. It also highlights core competencies in programming languages, frameworks, and tools, providing a comprehensive view of their expertise. An intuitive layout allows visitors to explore projects, view achievements, and connect for potential collaborations or opportunities.",
    "image": "/images/works/portfolio.png",
    "liveUrl": "https://harishgarg.tech"
  },
];

export function Works(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length);
  };

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
      }, 10000);

      return () => clearInterval(timer);
    }
  }, [isHovering]);

  return (
    <section
      id='projects'
      className='py-20 relative'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className='container mx-auto px-4 md:px-6'>
        <motion.h2 className='text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10 font-poppins 
        text-white text-shadow'>
          Our Past Works
        </motion.h2>

        <div className="relative overflow-hidden h-[550px] md:h-[400px]">
          {works.map((work, index) => (
            <WorkCard
              key={index}
              work={work}
              isActive={index === currentIndex}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
          <button
            className='absolute left-0.5 md:left-1 top-44 transform -translate-y-1/2 bg-purple-950 
            bg-opacity-40 p-1 md:p-2 rounded-full text-white opacity-70 hover:opacity-100 transition-opacity duration-300'
            onClick={prevSlide}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className='absolute right-0.5 md:right-1 top-44 transform -translate-y-1/2 bg-purple-950 
            bg-opacity-40 p-1 md:p-2 rounded-full text-white opacity-70 hover:opacity-100 transition-opacity duration-300'
            onClick={nextSlide}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className='flex justify-center mt-6'>
          {works.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-purple-700' : 'bg-purple-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work, isActive, index, currentIndex }: { work: Work; isActive: boolean; index: number; currentIndex: number }): JSX.Element {
  const position = index - currentIndex;

  return (
    <div
      className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0'
      }`}
      style={{
        transform: `translateX(${position * 100}%)`,
      }}
    >
      <div className='bg-purple-900 bg-opacity-20 backdrop-blur-md p-3 md:p-6 rounded-xl shadow-xl 
      transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6'>
        <div className='w-full md:w-1/2 flex justify-center md:mb-0'>
          <Image src={work.image} layout="responsive" alt={work.title} width={420} height={320} 
          className='rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full h-auto' />
        </div>
        <div className='w-full md:w-1/2 text-justify'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-2 font-poppins text-purple-200'>{work.title}</h3>
          &nbsp;
          <p className='text-purple-300 mb-3 text-sm md:text-base'>{work.description}</p>
          &nbsp;
          <a
            href={work.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-4 md:px-6 py-1 md:py-2 bg-gradient-to-r 
            from-purple-900 to-purple-800 text-white rounded-full 
            hover:scale-110 transition-all duration-300 shadow-lg 
            hover:shadow-purple-950/50 text-sm md:text-base font-medium'
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
}
