import Link from "next/link";

export default function Home() {
  return (
      <main className="flex-1 min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold text-white">Dor Alagem</h1>
      <p className="text-gray-300">Computer Science student at HIT, passionate about technology and innovation!</p>
      <Link href="/about" className="text-blue-500 hover:text-blue-700">
        Learn more about me
      </Link>
    </main>
  );
}

