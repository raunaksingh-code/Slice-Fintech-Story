import Link from "next/link";
import { CreditCard } from "lucide-react";

export default function Navigation() {
  const navLinks = [
    { href: "/friction", label: "Friction" },
    { href: "/founder", label: "Founders" },
    { href: "/business-model", label: "Business Model" },
    { href: "/scale", label: "Geography" },
    { href: "/financials", label: "Status" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-space-grotesk font-extrabold text-3xl tracking-tight text-[#bf00ff]">
                slice
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-900 bg-[#f7f5fb] hover:bg-[#eae6f5] px-5 py-2.5 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
