import { motion } from 'framer-motion';
import { Mail, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-4 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Entre em Contato</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Vamos criar algo bonito juntos
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[
            {
              icon: <Mail className="w-6 h-6 text-gray-700 dark:text-white" />,
              text: "seelegallery@gmail.com",
              href: "mailto:seelegallery@gmail.com"
            },
            {
              icon: <Phone className="w-6 h-6 text-gray-700 dark:text-white" />,
              text: "47 99633-0974",
              href: "https://wa.me/5547996330974"
            },
            {
              icon: <Instagram className="w-6 h-6 text-gray-700 dark:text-white" />,
              text: "@marcelhamesti",
              href: "https://instagram.com/marcelhamesti"
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 px-8 py-6 bg-gray-50 dark:bg-gray-800 
                         rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 
                         transition-colors w-full md:w-auto justify-center"
            >
              {item.icon}
              <span className="text-gray-700 dark:text-gray-300 text-lg">{item.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;