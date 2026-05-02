import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8 font-mono">
      <p className="text-zinc-500 text-sm mb-6">~/dor-alagem $</p>
      <p className="text-white text-lg mb-2">
        <span className="text-red-400">error:</span> page not found
      </p>
      <p className="text-zinc-500 text-sm mb-1">exit code: 404</p>
      <p className="text-zinc-500 text-sm mb-8">
        did you mean:{" "}
        <Link
          href="/"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          /home
        </Link>
        ?
      </p>
    </div>
  );
}
