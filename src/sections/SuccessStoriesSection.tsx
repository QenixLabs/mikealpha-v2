import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const stories = [
  {
    title: 'Improving Hass Avocado Performance with HaifaStim™ Vital',
    excerpt: 'A grower in Karnataka applied Mike Alpha biostimulant program through drip at key growth stages. The result was more vigorous root development, healthier branching, visibly better fruit retention, and more uniform sizing through the harvest window.',
    image: '/images/success-1.jpg',
    link: '#',
  },
  {
    title: 'Multicote™ Agri in Potato: More Yield, Better ROI',
    excerpt: 'Progressive potato growers in Gujarat adopted a controlled-release nutrition program. Farmers reported significantly improved tuber set, uniform sizing, and a measurable increase in marketable yield compared to their previous fertilizer program.',
    image: '/images/blog-1.jpg',
    link: '#',
  },
  {
    title: 'Optimizing Kiwi Cultivation with Mike Alpha 360 Strategy',
    excerpt: 'Kiwi orchards in Himachal Pradesh benefited from a balanced foliar and soil program. The integrated approach improved flowering consistency, fruit fill, and post-harvest shelf life.',
    image: '/images/blog-2.jpg',
    link: '#',
  },
  {
    title: 'Growing Stronger Cucumbers Under Stress',
    excerpt: 'Cucumber growers in Maharashtra used a stress-management nutrition program during peak summer. Crops showed better vine vigor, improved fruit set, and sustained production through heat stress.',
    image: '/images/blog-3.jpg',
    link: '#',
  },
  {
    title: 'Mike Alpha Powers Banana Performance from the Ground Up',
    excerpt: 'Banana plantations in Tamil Nadu implemented a precision nutrition plan from planting to bunch filling. The program delivered stronger root establishment, uniform bunch development, and improved finger grade.',
    image: '/images/success-1.jpg',
    link: '#',
  },
  {
    title: 'Taking Citrus Nutrition to the Next Level: Proven Results from South India',
    excerpt: 'Citrus growers in Telangana applied a balanced NPK and micronutrient program across the season. Results included better flowering, reduced fruit drop, and brighter, heavier fruit at harvest.',
    image: '/images/blog-1.jpg',
    link: '#',
  },
];

export default function SuccessStoriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

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
          SUCCESS STORIES
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-all -ml-2 lg:-ml-5"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-all -mr-2 lg:-mr-5"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="px-8"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-[300px] lg:h-[350px] object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="py-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {story.excerpt}
                    </p>
                    <a
                      href={story.link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Read All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-all duration-300 hover:scale-[1.02]"
          >
            Read All Success Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
