import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex-1 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white">Contact</h1>
      <div className="flex gap-6 mt-6">
        <a href="mailto:dor3382@gmail.com" target="_blank" className="hover:opacity-70 transition-opacity">
  <Image src="/gmail.svg" alt="Gmail" width={32} height={32} className="invert" />
        </a>
        <a href="https://github.com/DORI2001" target="_blank" className="hover:opacity-70 transition-opacity">
  <Image src="/github.svg" alt="GitHub" width={32} height={32} className="invert" />
        </a>
        <a href="https://www.linkedin.com/in/dor-alagem" target="_blank" className="hover:opacity-70 transition-opacity">
  <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className="invert" />
        </a>
      </div>
      <form action="mailto:dor3382@gmail.com" method="GET" className="flex flex-col gap-4 mt-8 w-full max-w-md">
        <input type="text" placeholder="Your name" className="bg-neutral-800 text-white rounded-lg p-3" />
        <input type="email" placeholder="Your email" className="bg-neutral-800 text-white rounded-lg p-3" />
        <textarea placeholder="Your message" rows={5} className="bg-neutral-800 text-white rounded-lg p-3" />
        <button type="submit" className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors">
          Send
        </button>
      </form>
    </main>
  );
}
