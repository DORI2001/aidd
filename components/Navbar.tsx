import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-900 p-4 flex gap-6">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link href="/projects" className="text-white hover:text-gray-300">
          Projects
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
    </nav>
  );
}