"use client";

import { Shelf } from "@/types/shelf";
import { HiDotsHorizontal } from "react-icons/hi";

type Props = Shelf;

export default function List({ title, items }: Props) {
  return (
    <div className="mb-10 px-4">
      <h2 className="text-white text-[24px] text-base font-black uppercase tracking-tight mb-5">
        {title}
      </h2>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-start cursor-pointer group">
            <div className="flex-shrink-0 w-[140px] aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-1 py-0.5">
              <h3 className="text-white text-[16px] font-bold leading-tight tracking-tight mb-2 line-clamp-2">
                {item.title}
              </h3>
              <span className="text-zinc-400 text-[14px] font-medium mb-1">
                {item.subtitle}
              </span>
              <div className="mt-auto">
                <HiDotsHorizontal size={18} className="text-zinc-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}