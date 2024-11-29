import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Menu, Sun, Moon, Home, Image, User, Mail, X } from "lucide-react";
import type { ThemeProps } from "../types";

interface NavbarProps extends ThemeProps {}

const Navbar = memo(({ isDark, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  const navItems = [
    { icon: <Home className="w-4 h-4" />, label: "Início", id: "top" },
    { icon: <Image className="w-4 h-4" />, label: "Galeria", id: "portfolio" },
    { icon: <User className="w-4 h-4" />, label: "Sobre", id: "about" },
    { icon: <Mail className="w-4 h-4" />, label: "Contato", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#top"
            onClick={() => scrollToSection("top")}
            className="text-xl font-medium tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Marcel Amestí
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md"
                whileHover={{ x: 4 }}
                whileTap={{ x: 0 }}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md"
              whileHover={{ x: 4 }}
              whileTap={{ x: 0 }}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span className="ml-2">Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span className="ml-2">Modo Escuro</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center px-3 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ x: 0 }}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="flex w-full items-center px-3 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ x: 0 }}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span className="ml-2">Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span className="ml-2">Modo Escuro</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
