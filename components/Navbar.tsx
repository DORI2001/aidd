"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-full transition-colors font-mono text-sm ${
      pathname === path
        ? "bg-cyan-400 text-black"
        : "text-zinc-300 hover:text-black hover:bg-cyan-400"
    }`;

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
      <div
        className={`flex flex-col gap-2 mt-2 md:flex-row md:gap-6 md:mt-0 md:flex ${isOpen ? "flex" : "hidden"}`}
      >
        <Link href="/" className={linkClass("/")}>
          home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          about
        </Link>
        <Link href="/projects" className={linkClass("/projects")}>
          projects
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          contact
        </Link>
      </div>
    </nav>
  );
}
