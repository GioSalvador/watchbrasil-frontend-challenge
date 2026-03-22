"use client";

import { useState } from "react";
import { FaBars, FaBasketballBall } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { SiF1 } from "react-icons/si";
import Link from "next/link";

type Props = {
  currentPage: number;
};

export default function Navbar({ currentPage }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  let Icon = GiSoccerBall;
  let iconSize = 20;

  if (currentPage === 2) {
    Icon = FaBasketballBall;
  } else if (currentPage === 3) {
    Icon = SiF1;
    iconSize = 30;
  }

  return (
    <header className="relative w-full h-[80px] flex items-center justify-between px-4 py-3 bg-black text-white">
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={20} />
      </button>

      <div className="flex items-center gap-2">
        <Icon size={iconSize} />
        <span className="text-[24px] font-semibold">FNB</span>
      </div>

      <div className="w-5" />

      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-black border-t border-gray-800 flex flex-col z-50">
          <Link href="/?page=1" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-gray-900 font-bold">
            Football
          </Link>

          <Link href="/?page=2" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-gray-900 font-bold">
            Basketball
          </Link>

          <Link href="/?page=3" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-gray-900 font-bold">
            Formula 1
          </Link>

          <div className="border-t border-gray-800" />

          <a
            href="https://www.linkedin.com/in/giovani-salvador/"
            target="_blank"
            className="px-4 py-3 hover:bg-gray-900 text-gray-400 font-bold"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}