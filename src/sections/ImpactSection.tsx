import { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Pause, Play, Zap, Leaf, Sprout } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: 50,
    suffix: '%',
    label: 'Renewable Energy Sources',
    description: 'Transition to renewable energy across Mike Alpha operations by 2030.',
    link: '#',
  },
  {
    icon: Leaf,
    value: 20,
    suffix: '%',
    label: 'GHG Emissions Reduction',
    description: 'Cut greenhouse gas emissions through precision manufacturing and logistics.',
    link: '#',
  },
  {
    icon: Sprout,
    value: 10,
    suffix: 'M ton',
    label: 'Sustainable Agriculture',
    description: 'Enable 10 million tons of sustainable agricultural output through advanced plant nutrition.',
    link: '#',
  },
];

export default function ImpactSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.section
      id="impact"
      className="relative w-full min-h-[420px] overflow-hidden"
      onViewportEnter={() => setHasAnimated(true)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/impact-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 lg:px-6 py-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex flex-col">
            <span className="bg-accent-blue text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider">
              THIS IS
            </span>
            <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider">
              PRECISION
            </span>
            <span className="bg-accent-purple text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider">
              IMPACT
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold text-white text-center mb-4"
        >
          Mike&apos;s{' '}
          <span className="border-b-4 border-secondary">IMPACT</span> goals
        </motion.h2>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm uppercase tracking-wider mb-2 opacity-90">
                {stat.label}
              </p>
              <p className="text-5xl font-bold mb-3">
                {hasAnimated ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </p>
              <p className="text-sm opacity-80 max-w-[280px] mx-auto mb-4">
                {stat.description}
              </p>
              <a
                href={stat.link}
                className="text-sm font-medium text-secondary hover:underline uppercase tracking-wider"
              >
                Read More
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-6 left-6 z-20 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
    </motion.section>
  );
}
