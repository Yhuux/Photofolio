import type { ImageItem } from '../types';

const imageCache = new Map<string, Promise<void>>();

export const preloadImage = (src: string): Promise<void> => {
  if (imageCache.has(src)) {
    return imageCache.get(src)!;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = reject;
  });

  imageCache.set(src, promise);
  return promise;
};

export const preloadImages = async (images: ImageItem[], priority = false): Promise<void[]> => {
  if (!priority) return [];
  
  // Only preload the first 4 images for performance
  return Promise.all(
    images.slice(0, 4).map(image => preloadImage(image.url))
  );
};

// Use a smaller image size for blur placeholder
export const generateBlurDataUrl = async (url: string): Promise<string> => {
  const cache = new Map<string, string>();
  
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  try {
    const response = await fetch(url);
    const blob = await response.blob();
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        cache.set(url, result);
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    return '';
  }
};