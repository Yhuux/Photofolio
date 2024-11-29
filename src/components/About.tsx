import { motion } from 'framer-motion';
import { Camera, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-32 px-4 bg-gray-50 dark:bg-gray-800" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-8 dark:text-white">Sobre Mim</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Com um ano de experiência capturando momentos preciosos da vida, trago uma perspectiva única para cada ensaio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              icon: <Camera className="w-8 h-8 text-gray-800 dark:text-white" />,
              title: "Equipamento Profissional",
              description: "Utilizando equipamentos de alta qualidade para garantir os melhores resultados"
            },
            {
              icon: <Award className="w-8 h-8 text-gray-800 dark:text-white" />,
              title: "Fotógrafo Premiado",
              description: "Reconhecido pelo olhar criativo e qualidade"
            },
            {
              icon: <Users className="w-8 h-8 text-gray-800 dark:text-white" />,
              title: "Foco no Cliente",
              description: "Sua visão e satisfação são minhas principais prioridades"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <div className="inline-block p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;