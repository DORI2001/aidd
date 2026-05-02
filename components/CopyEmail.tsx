"use client";

import { useState } from "react";
import Image from "next/image";

export default function CopyEmail({ size = 32, dim = false }: { size?: number; dim?: boolean }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("dor3382@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative flex items-center">
      <button onClick={handleCopy} className="hover:opacity-70 transition-opacity cursor-pointer">
        <Image src="/gmail.svg" alt="Gmail" width={size} height={size} className={`invert${dim ? " opacity-60" : ""}`} />
      </button>
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-700 text-white text-xs font-mono px-2 py-1 rounded whitespace-nowrap">
          copied!
        </span>
      )}
    </div>
  );
}
