import { useRef } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = [
  {
    slug: '19-19-19',
    name: 'Mike 19-19-19',
    formula: 'Balanced NPK 19-19-19',
    description: 'Balanced NPK mixture fertilizer for vegetative growth. Virtually free from Na & Cl with moderate pH.',
    image: '/products/All Products_19-19-19.png',
  },
  {
    slug: 'bvm',
    name: 'Mike BVM',
    formula: '3-Strain: N-fix + P-sol + K-mob',
    description: 'Consortium of Rhizobium, Bacillus Megaterium, and Frateuria Aurantia for comprehensive soil fertility.',
    image: '/products/All Products_BVM.png',
  },
  {
    slug: '00-52-34',
    name: 'Mike 00-52-34 (MKP)',
    formula: 'Mono Potassium Phosphate',
    description: '100% Water Soluble Complex Fertilizer for profuse flowering and excellent fruit setting.',
    image: '/products/All Products_00-52-34.png',
  },
  {
    slug: 'blackpot',
    name: 'Mike Blackpot 3-0-52',
    formula: 'NPK 3-0-52 + Humic',
    description: 'Super-concentrated water-soluble humic-potassium formulation for fruit sizing and ripening.',
    image: '/products/All Products_Blackpot.png',
  },
  {
    slug: 'whitepot-solution',
    name: 'Mike Whitepot Solution',
    formula: 'K2O 30% Liquid Potassium',
    description: 'Liquid potassium solution with fortifying effect for foliar application and improved fruit quality.',
    image: '/products/All Products_Whitepot.png',
  },
  {
    slug: '13-00-45',
    name: 'Mike 13-00-45',
    formula: 'Potassium Nitrate',
    description: 'Nitrate nitrogen & high potash for excellent fruit setting, uniform size, and healthy high yield.',
    image: '/products/All Products_13-00-45.png',
  },
];

export default function ProductsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="products" className="w-full py-16 bg-mike-gray-light">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-center text-gray-800 uppercase tracking-widest mb-12"
        >
          OUR PRODUCTS
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
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-all -mr-2 lg:-mr-5"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="px-8"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <h3 className="text-base font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{product.formula}</p>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="w-full h-[160px] flex items-center justify-center mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-auto"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
