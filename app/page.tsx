import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent pb-2">
        Dor Alagem
      </h1>
      <div className="h-1 w-24 bg-cyan-400 rounded-full mt-2"></div>
      <p className="text-lg md:text-xl text-zinc-300 mt-6 text-center max-w-lg">
        Computer Science student at HIT, passionate about technology and innovation!
      </p>
      <div className="flex gap-4 mt-8">
        <Link href="/about" className="border border-cyan-400 text-cyan-400 font-semibold px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors">
          About Me
        </Link>
        <Link href="/projects" className="border border-cyan-400 text-cyan-400 font-semibold px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors">
          Projects
        </Link>
      </div>
    </main>
  );
}
