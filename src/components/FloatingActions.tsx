import { motion } from 'framer-motion';
import { Mail, Store } from 'lucide-react';

const coral = '#EE4034';
const navy = '#19204A';
const whatsappUrl = 'https://wa.me/918799290971';

export default function FloatingActions() {
  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 p-4 items-end">
      {/* Contact us */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        whileHover={{ scale: 1.05, x: -4 }}
        className="flex flex-col items-center justify-center gap-1.5 w-20 py-3 px-2 rounded-xl bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all cursor-pointer"
        style={{ color: navy }}
      >
        <Mail className="w-6 h-6" style={{ color: coral }} />
        <span className="text-[10px] font-medium leading-tight text-center">Contact us</span>
      </motion.a>

      {/* Distributor */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Distributor on WhatsApp"
        whileHover={{ scale: 1.05, x: -4 }}
        className="flex flex-col items-center justify-center gap-1.5 w-20 py-3 px-2 rounded-xl bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all cursor-pointer"
        style={{ color: navy }}
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{ backgroundColor: `${coral}1A` }}
        >
          <Store className="w-5 h-5" style={{ color: coral }} />
        </div>
        <span className="text-[10px] font-medium leading-tight text-center">Distributor</span>
      </motion.a>
    </aside>
  );
}
