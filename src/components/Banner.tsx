"use client";

import { useState, useEffect, TouchEvent } from "react";
import { Shelf } from "@/types/shelf";
import { FaPlay } from "react-icons/fa";

type Props = Shelf;

export default function Banner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!items.length) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [items.length, currentIndex]);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  if (!items || items.length === 0) return null;

  return (
    <div 
      className="w-full relative bg-black overflow-hidden h-[550px] touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        {items.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-60" : "opacity-0"
            }`}
          >
            <img
              src={slide.image_url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      {items.map((slide, index) => (
        <div
          key={slide.id }
          className={`absolute bottom-24 left-0 right-0 z-20 flex flex-col items-center text-center px-8 transition-all duration-500 ${
            index === currentIndex 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <h2 className="text-3xl font-black text-white uppercase leading-[1.1] tracking-tighter">
            {slide.title}
          </h2>
          
          {slide.subtitle && (
            <p className="text-sm text-gray-300 mt-2 uppercase tracking-widest font-medium">
              {slide.subtitle}
            </p>
          )}
          
          <button className="mt-8 flex items-center justify-center gap-3 px-12 py-3.5 bg-[#0049C8] text-white text-base font-bold rounded-md active:scale-95 transition-transform">
            <FaPlay size={14} />
            Watch Now
          </button>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-2.5">
        {items.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}