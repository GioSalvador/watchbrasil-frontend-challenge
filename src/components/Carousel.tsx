"use client";

import { Shelf } from "@/types/shelf";
import { HiDotsHorizontal } from "react-icons/hi";

type Props = Shelf;

export default function Carousel({ title, items }: Props) {
  return (
    <div className="mb-6 pl-4">
      <h2 className="text-white text-[24px] font-black uppercase tracking-tight mb-2.5">
        {title}
      </h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pr-4">
        {items.map((item) => (
          <div key={item.id} className="w-[253px] flex-shrink-0 cursor-pointer group">
            <div className="relative aspect-video mb-1.5 overflow-hidden rounded-sm bg-zinc-900">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col max-w-[85%]">
                <h3 className="text-white font-bold text-[16px] leading-tight truncate">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-[14px] mt-0.5 truncate">
                  {item.subtitle}
                </p>
              </div>
              <button className="text-zinc-400">
                <HiDotsHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}