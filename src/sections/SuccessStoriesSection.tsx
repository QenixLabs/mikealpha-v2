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
    title: 'Stronger Cotton Stands and Better Boll Set in Gujarat',
    excerpt: 'A grower in Anand applied Mike BVM at 1 L/acre through drip at planting, followed by Mike 19-19-19 at 2 kg/acre during vegetative growth and Mike 13-00-45 at fruit development. The result was more vigorous root development, healthier branching, visibly better boll retention, and more uniform boll sizing through the picking window.',
    image: '/images/success-1.jpg',
    link: '#',
  },
  {
    title: 'Higher Tomato Yields with Mike 13-00-45 in Maharashtra',
    excerpt: 'Progressive tomato growers in Nashik district adopted Mike 13-00-45 during the fruit development stage. Applied through drip irrigation at 2 kg/acre, farmers reported significantly improved fruit set, uniform fruit sizing, and a 15% increase in marketable yield compared to their previous fertilizer program.',
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
          Success Stories
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
