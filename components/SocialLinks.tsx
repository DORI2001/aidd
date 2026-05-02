import Image from "next/image";

export default function SocialLinks({ size = 32, dim = false }: { size?: number; dim?: boolean }) {
  const cls = `invert${dim ? " opacity-60" : ""}`;
  return (
    <>
      <a
        href="https://github.com/DORI2001"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
      >
        <Image src="/github.svg" alt="GitHub" width={size} height={size} className={cls} />
      </a>
      <a
        href="https://www.linkedin.com/in/dor-alagem"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
      >
        <Image src="/linkedin.svg" alt="LinkedIn" width={size} height={size} className={cls} />
      </a>
    </>
  );
}
