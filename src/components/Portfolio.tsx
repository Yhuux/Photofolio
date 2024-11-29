import { useState, useCallback, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react';
import type { ImageItem } from '../types';
import { PORTFOLIO_IMAGES } from '../utils/constants';
import ImageWithBlur from './ImageWithBlur';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ITEMS_PER_PAGE = 6;

const ImageModal = memo(({ image, onClose, onNext, onPrev }: {
  image: ImageItem;
  onClose: () => void;
  onNext: (e: React.MouseEvent) => void;
  onPrev: (e: React.MouseEvent) => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
  >
    <div className="absolute top-4 right-4 flex items-center space-x-4">
      <button
        onClick={(e) => {
          e.stopPropagation();
          const link = document.createElement('a');
          link.href = image.url;
          link.download = `image-${image.id}`;
          link.click();
        }}
        className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <Download className="w-6 h-6" />
      </button>
      <button
        onClick={onClose}
        className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
    </div>

    <button
      onClick={onPrev}
      className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>

    <motion.img
      key={image.id}
      src={image.url}
      alt={image.title}
      className="max-w-full max-h-[90vh] object-contain"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    />

    <button
      onClick={onNext}
      className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </motion.div>
));

ImageModal.displayName = 'ImageModal';

const PortfolioImage = memo(({ image, onClick, index }: {
  image: ImageItem;
  onClick: () => void;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="cursor-pointer group overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <ImageWithBlur
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        priority={index < 4}
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
));

PortfolioImage.displayName = 'PortfolioImage';

const Portfolio = memo(() => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const displayedImages = useMemo(() => 
    PORTFOLIO_IMAGES.slice(0, page * ITEMS_PER_PAGE),
    [page]
  );

  const hasMore = displayedImages.length < PORTFOLIO_IMAGES.length;

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handlePrevious = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex(prev => 
      prev === null ? null : prev === 0 ? PORTFOLIO_IMAGES.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex(prev => 
      prev === null ? null : prev === PORTFOLIO_IMAGES.length - 1 ? 0 : prev + 1
    );
  }, []);

  if (isVisible && hasMore) {
    requestAnimationFrame(() => {
      setPage(prev => prev + 1);
    });
  }

  return (
    <section className="py-32 px-4 bg-white dark:bg-gray-900" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Portfolio</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedImages.map((image, index) => (
            <PortfolioImage
              key={image.id}
              image={image}
              onClick={() => handleImageClick(index)}
              index={index}
            />
          ))}
        </div>

        {hasMore && (
          <div ref={containerRef} className="h-20 flex items-center justify-center mt-8">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 border-2 border-gray-900 dark:border-white rounded-full border-t-transparent animate-spin"
            />
          </div>
        )}

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <ImageModal
              image={PORTFOLIO_IMAGES[selectedImageIndex]}
              onClose={handleClose}
              onNext={handleNext}
              onPrev={handlePrevious}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;