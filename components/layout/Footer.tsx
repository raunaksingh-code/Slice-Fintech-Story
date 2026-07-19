import Link from "next/link";
import { CreditCard, Globe, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white/80 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <CreditCard className="w-8 h-8 text-[var(--color-purple-slice)]" />
            <span className="font-poppins font-bold text-2xl tracking-tight text-white">
              slice
            </span>
          </Link>
          <p className="text-sm">
            Building the simplest, fastest, and most transparent payments platform.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-semibold text-white mb-4">Explore</h4>
          <ul className="space-y-3 text-sm grid grid-cols-2 gap-x-4 gap-y-3">
            <li><Link href="/friction" className="hover:text-[var(--color-purple-slice)] transition">Friction</Link></li>
            <li><Link href="/founder" className="hover:text-[var(--color-purple-slice)] transition">Founders</Link></li>
            <li><Link href="/business-model" className="hover:text-[var(--color-purple-slice)] transition">Business Model</Link></li>
            <li><Link href="/scale" className="hover:text-[var(--color-purple-slice)] transition">Geography</Link></li>
            <li><Link href="/financials" className="hover:text-[var(--color-purple-slice)] transition">Status</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-purple-slice)] transition">
              <Globe className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-purple-slice)] transition">
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-purple-slice)] transition">
              <MessageSquare className="w-5 h-5 text-white" />
            </a>
          </div>
          <h4 className="font-semibold text-white mb-2">Help Desk</h4>
          <p className="text-sm text-gray-400">+91-8048329999</p>
          <p className="text-sm text-gray-400">help@slice.bank.in</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
         <div>
           <h4 className="font-semibold text-white mb-2">Corporate Office</h4>
           <p>No. 9, Ashford Park View, 80 ft Road,</p>
           <p>Koramangala 3rd Block, Bengaluru,</p>
           <p>Karnataka 560034, India</p>
         </div>
         <div>
           <h4 className="font-semibold text-white mb-2">Registered Office</h4>
           <p>1st and 3rd Floor, Fortune Central,</p>
           <p>Basistha Road, Basisthapur Bye Lane No. 3,</p>
           <p>Beltola, Guwahati, Assam 781028, India</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} slice Small Finance Bank. Project Website.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
