import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 p-4 flex items-center justify-between text-zinc-400 text-sm">
      <span>© 2026 Dor Alagem</span>
      <div className="flex gap-4">
        <a
          href="mailto:dor3382@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image src="/gmail.svg" alt="Gmail" width={20} height={20} className="invert opacity-60" />
        </a>
        <a
          href="https://github.com/DORI2001"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image src="/github.svg" alt="GitHub" width={20} height={20} className="invert opacity-60" />
        </a>
        <a
          href="https://www.linkedin.com/in/dor-alagem"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="invert opacity-60" />
        </a>
      </div>
    </footer>
  );
}
