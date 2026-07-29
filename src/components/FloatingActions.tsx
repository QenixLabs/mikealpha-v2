import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Mail, Sprout } from 'lucide-react';
import { cropGuides } from '@/data/cropGuides';

const coral = '#EE4034';
const navy = '#19204A';

const categoryOrder = [
  'Vegetables',
  'Fruit Trees',
  'Soft Fruit',
  'Field Crops',
  'Herbs',
  'Ornamentals',
  'Turf',
  'Forestry',
];

export default function FloatingActions() {
  const [interestOpen, setInterestOpen] = useState(false);

  const groupedCrops = useMemo(() => {
    const groups: Record<string, typeof cropGuides> = {};
    cropGuides.forEach((crop) => {
      if (!groups[crop.category]) groups[crop.category] = [];
      groups[crop.category].push(crop);
    });
    return categoryOrder
      .filter((cat) => groups[cat])
      .map((category) => ({
        category,
        crops: groups[category].sort((a, b) => a.cropName.localeCompare(b.cropName)),
      }));
  }, []);

  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 p-4 items-end">
      {/* Contact us */}
      <motion.a
        href="#contact"
        aria-label="Contact us"
        whileHover={{ scale: 1.05, x: -4 }}
        className="flex flex-col items-center justify-center gap-1.5 w-20 py-3 px-2 rounded-xl bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all cursor-pointer"
        style={{ color: navy }}
      >
        <Mail className="w-6 h-6" style={{ color: coral }} />
        <span className="text-[10px] font-medium leading-tight text-center">Contact us</span>
      </motion.a>

      {/* Choose Your Interest */}
      <motion.div
        onMouseEnter={() => setInterestOpen(true)}
        onMouseLeave={() => setInterestOpen(false)}
        animate={{ width: interestOpen ? 240 : 80 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className="relative flex flex-col items-start gap-2 py-3 px-2 rounded-xl bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-colors cursor-pointer overflow-hidden"
        style={{ color: navy }}
      >
        <div className="flex items-center gap-2 w-full">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
            style={{ backgroundColor: `${coral}1A` }}
          >
            <Sprout className="w-5 h-5" style={{ color: coral }} />
          </div>
          <span
            className={`text-xs font-semibold whitespace-nowrap transition-opacity ${interestOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            Your Interest
          </span>
        </div>

        <span
          className={`text-[10px] font-medium leading-tight text-center w-full transition-opacity ${interestOpen ? 'opacity-0 h-0' : 'opacity-100'}`}
        >
          Choose Your Interest
        </span>

        {interestOpen && (
          <div className="flex flex-col w-full mt-1 max-h-[60vh] overflow-y-auto pr-1">
            {groupedCrops.map(({ category, crops }) => (
              <div key={category} className="mb-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-navy/60 mb-1 px-1">
                  {category}
                </h4>
                <div className="flex flex-col">
                  {crops.map((crop) => (
                    <Link
                      key={crop.slug}
                      to={`/${crop.slug}`}
                      className="text-[11px] text-brand-text-primary hover:text-primary hover:bg-primary-light rounded px-1 py-1 transition-colors"
                    >
                      {crop.cropName}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </aside>
  );
}
