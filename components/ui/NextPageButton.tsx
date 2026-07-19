import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NextPageButton({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-24">
      <Link 
        href={href} 
        className="flex items-center gap-3 bg-[var(--color-purple-slice)] text-white px-12 py-6 rounded-[2rem] font-space-grotesk font-black text-2xl uppercase tracking-widest border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all"
      >
        <span>Next: {label}</span>
        <ArrowRight className="w-8 h-8" />
      </Link>
    </div>
  );
}
