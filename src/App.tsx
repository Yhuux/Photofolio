import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { useTheme } from './hooks/useTheme';
import './index.css';

// Lazy load components that are not immediately visible
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ErrorBoundary>
      <LazyMotion features={domAnimation}>
        <div className={isDark ? 'dark' : ''}>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Suspense fallback={<LoadingSpinner />}>
              <Navbar isDark={isDark} toggleTheme={toggleTheme} />
              <main className="pt-16">
                <Hero />
                <Portfolio />
                <About />
                <Contact />
              </main>
            </Suspense>
          </div>
        </div>
      </LazyMotion>
    </ErrorBoundary>
  );
}