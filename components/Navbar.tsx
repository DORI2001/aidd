import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-900 p-4 flex gap-6">
        <Link href="/" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors">
          About
        </Link>
        <Link href="/projects" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="text-zinc-300 hover:text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors">
          Contact
        </Link>
    </nav>
  );
}