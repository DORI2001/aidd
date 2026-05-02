import Link from "next/link";
import { ReactNode } from "react";

const cls =
  "border border-cyan-400 text-cyan-400 font-mono px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors";

export default function NavButton({
  href,
  download,
  children,
}: {
  href: string;
  download?: boolean;
  children: ReactNode;
}) {
  if (download) {
    return (
      <a href={href} download className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
