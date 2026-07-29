import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const events = [
  {
    day: '16',
    month: 'Jul',
    category: 'EVENTS',
    title: 'Mike Alpha at CONFIVA 2026',
    image: '/images/event-1.jpg',
    link: '#',
  },
  {
    day: '14',
    month: 'Jul',
    category: 'NEWS',
    title: 'Maala ESG Index 2026: Mike Alpha Continues to Rise',
    image: '/images/event-2.jpg',
    link: '#',
  },
  {
    day: '08',
    month: 'Jul',
    category: 'NEWS',
    title: 'Mike Alpha at the IFA Annual Conference 2026: Strengthening Connections Across the Global Fertilizer Industry',
    image: '/images/event-3.jpg',
    link: '#',
  },
];

export default function NewsEventsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-center text-gray-800 uppercase tracking-widest mb-12"
        >
          NEWS & EVENTS
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {events.map((event, index) => (
            <motion.a
              key={index}
              href={event.link}
              variants={fadeUpVariant}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Header with date and category */}
              <div className="flex items-start gap-4 p-4 pb-2">
                {/* Date */}
                <div className="flex flex-col items-center min-w-[50px]">
                  <span className="text-[10px] font-medium text-gray-500 uppercase">
                    {event.month}
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    {event.day}
                  </span>
                </div>

                {/* Category and Title */}
                <div>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                    {event.category}
                  </span>
                  <h3 className="text-base font-semibold text-gray-800 leading-snug group-hover:text-primary transition-colors mt-1">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden mt-2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-600 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Read All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Read All News &amp; Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}
