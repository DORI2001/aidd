import CopyEmail from "@/components/CopyEmail";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 p-4 flex items-center justify-between text-zinc-400 text-sm">
      <span>© {new Date().getFullYear()} Dor Alagem</span>
      <div className="flex gap-4">
        <CopyEmail size={20} dim />
        <SocialLinks size={20} dim />
      </div>
    </footer>
  );
}
