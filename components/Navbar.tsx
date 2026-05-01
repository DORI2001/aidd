"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-neutral-900 p-4 sticky top-0 z-50">
      <div className="flex justify-end items-center">
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`flex flex-col gap-2 mt-2 md:flex-row md:gap-6 md:mt-0 md:flex ${isOpen ? "flex" : "hidden"}`}>
        <Link href="/" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors font-mono text-sm">home</Link>
        <Link href="/about" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors font-mono text-sm">about</Link>
        <Link href="/projects" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors font-mono text-sm">projects</Link>
        <Link href="/contact" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors font-mono text-sm">contact</Link>
      </div>
    </nav>
  );
}
