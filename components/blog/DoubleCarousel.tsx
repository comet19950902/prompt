import { useState } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const items = [
  { id: 1, src: '/store.png', alt: 'Item 1' },
  { id: 2, src: '/store.png', alt: 'Item 2' },
  { id: 3, src: '/store.png', alt: 'Item 3' },
  { id: 4, src: '/store.png', alt: 'Item 4' },
  { id: 5, src: '/store.png', alt: 'Item 5' },
  { id: 6, src: '/store.png', alt: 'Item 6' },
  { id: 7, src: '/store.png', alt: 'Item 7' },
  { id: 8, src: '/store.png', alt: 'Item 8' },
];

export default function DoubleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 2 : prevIndex - 2);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === items.length - 2 ? 0 : prevIndex + 2);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        {items.slice(currentIndex, currentIndex + 4).map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="w-64 h-40 overflow-hidden rounded-lg">
              <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
            </div>
            <div className="mt-2 text-sm font-medium">{item.alt}</div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 z-10 p-2 transition-colors duration-300 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={handlePrevClick}
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute top-1/2 right-0 z-10 p-2 transition-colors duration-300 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={handleNextClick}
      >
        <FaChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
