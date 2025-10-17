import React, { useState } from "react";

export interface CarouselProps {
  slides: React.ReactNode[];
  theme?: {
    background?: string; // container background
    indicator?: string; // active dot color
    inactiveIndicator?: string; // inactive dot color
  };
}

export default function Carousel({ slides, theme }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{ background: theme?.background || "#f3f3f3" }}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className="w-3 h-3 rounded-full cursor-pointer transition-colors"
            onClick={() => setCurrentIndex(idx)}
            style={{
              backgroundColor:
                idx === currentIndex
                  ? theme?.indicator || "#7C3AED"
                  : theme?.inactiveIndicator || "#999",
            }}
          />
        ))}
      </div>
    </div>
  );
}
