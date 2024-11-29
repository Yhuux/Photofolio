import { useState, useEffect, useRef, useMemo } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

const observerCache = new Map<string, IntersectionObserver>();

export function useIntersectionObserver(options: IntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const observerKey = useMemo(() => 
    `${options.threshold ?? 0}-${options.rootMargin ?? '0px'}`,
    [options.threshold, options.rootMargin]
  );

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return;

    let observer = observerCache.get(observerKey);
    
    if (!observer) {
      observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);
      observerCache.set(observerKey, observer);
    }

    observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer?.unobserve(currentTarget);
        if (!observer?.takeRecords().length) {
          observer?.disconnect();
          observerCache.delete(observerKey);
        }
      }
    };
  }, [observerKey, options.threshold, options.rootMargin]);

  return [targetRef, isIntersecting] as const;
}