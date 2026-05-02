import Link from "next/link";
import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent pb-2">
        Dor Alagem
      </h1>
      <div className="h-1 w-24 bg-cyan-400 rounded-full mt-2"></div>
      <TypingText text="software engineer · cloud · devops · networks" />
      <div className="flex items-center gap-2 mt-4">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-emerald-400 font-mono text-xs">
          open to opportunities
        </span>
      </div>
      <div className="flex gap-4 mt-8">
        <Link
          href="/about"
          className="border border-cyan-400 text-cyan-400 font-mono px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors"
        >
          about me
        </Link>
        <Link
          href="/projects"
          className="border border-cyan-400 text-cyan-400 font-mono px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors"
        >
          projects
        </Link>
      </div>
    </main>
  );
}
