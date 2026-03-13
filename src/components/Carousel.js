'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function Carousel() {
  const images = [
    "/hero-2.jpg",
    "/hero-2.jpg",
    "/hero-2.jpg",
    // Agrega más imágenes aquí
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect(); // Initial set
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}