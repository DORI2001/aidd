"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const lines = [
  "~/dor-alagem $ cd /page-that-doesnt-exist",
  "error: page not found",
  "exit code: 404",
  "did you mean: /home ?",
];

export default function NotFound() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const done = lineIndex >= lines.length;

  useEffect(() => {
    if (done) return;
    const current = lines[lineIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex, done]);

  function renderLine(line: string, i: number) {
    const isVisible = i < lineIndex || (i === lineIndex);
    if (!isVisible) return null;
    const text = i === lineIndex ? line.slice(0, charIndex) : line;
    const isDim = i !== 1;

    if (i === 1) {
      const errorPart = text.slice(0, Math.min(text.length, 7));
      const rest = text.slice(7);
      return (
        <p key={i} className="text-white text-lg">
          <span className="text-red-400">{errorPart}</span>{rest}
        </p>
      );
    }

    if (i === 3 && i < lineIndex) {
      return (
        <p key={i} className="text-zinc-500 text-sm">
          {"did you mean: "}
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            /home
          </Link>
          {" ?"}
        </p>
      );
    }

    return (
      <p key={i} className={`${isDim ? "text-zinc-500" : "text-white"} text-sm`}>
        {text}
      </p>
    );
  }

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8 font-mono">
      <div className="flex flex-col gap-3 mb-8">
        {lines.map((line, i) => renderLine(line, i))}
      </div>
      {done && (
        <Link
          href="/"
          className="border border-cyan-400 text-cyan-400 font-mono px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors"
        >
          go home
        </Link>
      )}
    </div>
  );
}
