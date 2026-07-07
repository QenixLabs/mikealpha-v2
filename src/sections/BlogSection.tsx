import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const blogPosts = [
  {
    title: 'Getting the Most from Mike 13-00-45 on Tomatoes and Grapes',
    author: 'Mike Alpha Agronomy Team',
    image: '/images/blog-1.jpg',
    link: '#',
  },
  {
    title: 'Why Foliar Potassium with Mike Whitepot Solution Improves Fruit Quality',
    author: 'Mike Alpha Agronomy Team',
    image: '/images/blog-2.jpg',
    link: '#',
  },
  {
    title: 'Biological Nutrition: How Mike BVM Supports Cotton and Paddy',
    author: 'Mike Alpha Agronomy Team',
    image: '/images/blog-3.jpg',
    link: '#',
  },
];

export default function BlogSection() {
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
          Agronomy Blog
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              variants={fadeUpVariant}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Author */}
              <div className="flex items-center gap-3 p-4 pb-2">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">{post.author}</span>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-600 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
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
            Read All Blog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
