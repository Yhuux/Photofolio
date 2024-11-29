import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
          alt="Câmera profissional em superfície de madeira"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-normal mb-6 tracking-tight text-white">
            Capturando momentos em sua
            <span className="block font-medium mt-2">forma mais pura</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Fotografia profissional que conta sua história através de uma lente minimalista
          </p>
          <a
            href="#portfolio"
            className="inline-flex px-8 py-4 bg-white text-gray-900 
                     rounded-full text-sm font-medium hover:bg-gray-100 
                     transition-colors duration-200"
          >
            Ver Portfólio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;