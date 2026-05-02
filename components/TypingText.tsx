"use client";

import { useState, useEffect } from "react";

export default function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-zinc-500 font-mono text-sm tracking-widest">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}
