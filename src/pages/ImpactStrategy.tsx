import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import ImpactLayout from '@/components/ImpactLayout';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const relatedArticles = [
  {
    title: 'Precision Impact: transitioning Agriculture for a Changing World',
    excerpt:
      'As agriculture faces rising demand alongside tightening resource constraints, a new approach known...',
    image: '/images/blog-1.jpg',
    link: '/insights',
  },
  {
    title: 'Reducing Fertilizer Carbon Footprint & Environmental Impact',
    excerpt:
      'By combining smart fertilizers, precise application methods, and smart fertilizer software, farmers...',
    image: '/images/blog-2.jpg',
    link: '/insights',
  },
  {
    title: 'From Crisis to Cultivation: How Precision Impact Drives Food Security',
    excerpt:
      'Climate change is no longer a distant warning – it\'s an everyday reality. In the last year 50% of...',
    image: '/images/blog-3.jpg',
    link: '/insights',
  },
];

export default function ImpactStrategy() {
  return (
    <ImpactLayout>
      <section className="py-12 md:py-16">
        <div className="max-w-container mx-auto px-4 lg:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUpVariant}
              className="flex items-center gap-2 text-sm text-brand-text-secondary mb-6"
            >
              <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/precision-impact" className="hover:text-primary transition-colors">IMPACT</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-navy">Our Strategy: Precision IMPACT for a Better World</span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
            >
              Our Strategy: Precision IMPACT for a Better World
            </motion.h1>

            <motion.div variants={fadeUpVariant} className="prose prose-lg max-w-none text-brand-text-primary">
              <p>
                Mike Alpha is at the forefront of precision nutrition for agricultural crops, helping growers
                worldwide grow more, more sustainably. We are committed to responsible practices in all aspects
                of our activities, bringing innovative solutions that emphasize precision agriculture and
                sustainability, guided by the core values we embrace:<strong> IMPACT, INNOVATION, COMPASSion.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-background">
        <div className="max-w-container mx-auto px-4 lg:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUpVariant}>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Positive Impact from A to Z</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-6">
                Mike Alpha's holistic ESG and Impact approach covers the entire value chain. From corporate
                policies and strategic decision-making to daily conduct; from initial product development through
                production and supply to after-use – all our actions are aligned with our Impact commitment.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Precision Impact for Sustainable Growth</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-6">
                In a rapidly changing world threatened by climate change and the depletion of land and water
                resources, Mike Alpha leads efforts to create food security for the growing global population.
                Our Precision Impact plant nutrition solutions focus on Nutrient Use Efficiency (NUE), enabling
                growers to improve yield production while minimizing fertilizer usage, conserving water, reducing
                greenhouse gas emissions, and preventing contamination of water and soil sources.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Mike Alpha's IMPACT Meets Sustainable Development Goals</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-4">
                In 2019, Mike Alpha became the first fertilizer company to join the UN Global Compact. Our Impact
                actions focus on making a scalable contribution to six of the UN's Sustainable Development Goals
                (SDGs), supporting three pillars of long-term welfare: thriving humanity, sustainable crop
                production, and a healthy planet.
              </p>
              <a
                href="/sustainable-development-goals-1"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Learn more about how we promote the SDGs
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="bg-white border border-brand-border rounded-xl overflow-hidden shadow-card"
            >
              <div className="aspect-video bg-navy/10">
                <img
                  src="/images/impact-bg.jpg"
                  alt="Precision Impact"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Mike Alpha - This is Precision Impact</h3>
                <p className="text-sm text-brand-text-secondary">
                  Watch how we turn precision nutrition into measurable impact for growers and the planet.
                </p>
              </div>
            </motion.div>
          </motion.div>        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-container mx-auto px-4 lg:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUpVariant} className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Taking Practical Measures
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-brand-text-secondary leading-relaxed mb-6 max-w-3xl">
              Three principles, embedded in every link of our value chain, form the practical realization of
              our Impact vision: resource efficiency, accountability, and the centrality of growers and crops.
            </motion.p>

            <motion.ul variants={fadeUpVariant} className="space-y-4 max-w-3xl">
              <li className="bg-white border border-brand-border rounded-lg p-5">
                <strong className="text-navy">Efficient use of resources</strong>{' '}
                is a fundamental aspect of sustainability and essential for reducing environmental impact.
              </li>
              <li className="bg-white border border-brand-border rounded-lg p-5">
                <strong className="text-navy">Our commitment to accountability</strong>{' '}
                across the value chain guarantees fair and responsible conduct in all our operations, with all
                our stakeholders.
              </li>
              <li className="bg-white border border-brand-border rounded-lg p-5">
                <strong className="text-navy">By placing growers and crops at our ultimate focus</strong>
                , we ensure that our innovations and solutions are tailored to meet their needs, fostering
                successful and sustainable agriculture.
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-background">
        <div className="max-w-container mx-auto px-4 lg:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUpVariant} className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Our 2030 Goals
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-brand-text-secondary leading-relaxed mb-8 max-w-3xl">
              To evaluate the difference we make, and in order to plan our future steps, we have set ourselves a
              set of ambitious quantitative environmental and social goals. These goals are drilled down into
              specific projects, initiatives, and innovative developments.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { value: '50', suffix: '%', label: 'Renewable Energy Sources' },
                { value: '20', suffix: '%', label: 'GHG Emissions Reduction' },
                { value: '10', suffix: 'M ton', label: 'Sustainable Agriculture' },
              ].map((goal) => (
                <motion.div
                  key={goal.label}
                  variants={fadeUpVariant}
                  className="bg-white border border-brand-border rounded-lg p-8 text-center"
                >
                  <p className="text-5xl font-bold text-primary mb-3">
                    {goal.value}
                    <span className="text-3xl">{goal.suffix}</span>
                  </p>
                  <p className="text-sm uppercase tracking-wider text-navy">{goal.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-container mx-auto px-4 lg:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2 variants={fadeUpVariant} className="text-2xl md:text-3xl font-bold text-navy">
              You may also be interested in this
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {relatedArticles.map((article) => (
              <motion.div
                key={article.title}
                variants={fadeUpVariant}
                className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">{article.excerpt}</p>
                  <Link
                    to={article.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </ImpactLayout>
  );
}
