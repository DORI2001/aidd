"use client";

import { useState, useEffect } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import CopyEmail from "@/components/CopyEmail";
import SocialLinks from "@/components/SocialLinks";

const inputClass =
  "bg-neutral-800 text-white rounded-lg p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-cyan-400";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    setStatus(result.success ? "success" : "error");
    if (result.success) setCooldown(30);
  }

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.1)_0%,_transparent_60%)] pointer-events-none"></div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3 mx-auto"></div>
      </div>
      <div className="flex gap-6 mb-8">
        <CopyEmail size={32} />
        <SocialLinks size={32} />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input name="name" type="text" placeholder="your name" required className={inputClass} />
        <input name="email" type="email" placeholder="your email" required className={inputClass} />
        <textarea name="message" placeholder="your message" rows={5} required className={inputClass} />
        <button
          type="submit"
          disabled={status === "sending" || cooldown > 0}
          className="bg-cyan-400 text-black font-mono font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "sending..." : cooldown > 0 ? `wait ${cooldown}s` : "send →"}
        </button>
        {status === "success" && (
          <p className="text-emerald-400 font-mono text-sm text-center">message sent!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 font-mono text-sm text-center">something went wrong. try again.</p>
        )}
      </form>
    </div>
  );
}
