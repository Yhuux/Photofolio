import { useState, memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { BaseProps } from '../types';
import clsx from 'clsx';

interface ImageWithBlurProps extends BaseProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ImageWithBlur = memo(function ImageWithBlur({ 
  src, 
  alt, 
  className = '',
  priority = false
}: ImageWithBlurProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (!priority) return;

    const img = new Image();
    const controller = new AbortController();
    
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
    
    return () => {
      controller.abort();
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority]);

  if (error) {
    return (
      <div 
        className={clsx(
          'bg-gray-100 dark:bg-gray-800 flex items-center justify-center',
          className
        )}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <span className="text-sm text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <motion.div 
      className={clsx('relative overflow-hidden', className)}
      initial={false}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={clsx(
          'w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          role="presentation"
        />
      )}
    </motion.div>
  );
});

export default ImageWithBlur;