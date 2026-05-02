import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact — Dor Alagem",
  description: "Get in touch with Dor Alagem via email, GitHub, or LinkedIn.",
};

export default function Contact() {
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.1)_0%,_transparent_60%)] pointer-events-none"></div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3 mx-auto"></div>
      </div>
      <div className="flex gap-6 mb-8">
        <a
          href="mailto:dor3382@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/gmail.svg"
            alt="Gmail"
            width={32}
            height={32}
            className="invert"
          />
        </a>
        <a
          href="https://github.com/DORI2001"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={32}
            height={32}
            className="invert"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dor-alagem"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
            className="invert"
          />
        </a>
      </div>
      <form
        action="mailto:dor3382@gmail.com"
        method="GET"
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="your name"
          className="bg-neutral-800 text-white rounded-lg p-3 font-mono text-sm"
        />
        <input
          type="email"
          placeholder="your email"
          className="bg-neutral-800 text-white rounded-lg p-3 font-mono text-sm"
        />
        <textarea
          placeholder="your message"
          rows={5}
          className="bg-neutral-800 text-white rounded-lg p-3 font-mono text-sm"
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black font-mono font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors"
        >
          send →
        </button>
      </form>
    </div>
  );
}
