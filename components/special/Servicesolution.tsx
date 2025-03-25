

import {ChevronRight, CurlyBraces, Monitor, Smartphone} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {useState} from "react";


const serviceList = [
  {
    title: "Application mobile",
    description:
      "Découvrez notre application mobile innovante pour la gestion de la sécurité alimentaire. Suivez et gérez les stocks, surveillez la qualité des produits et recevez des alertes en temps réel sur les risques potentiels. Assurez-vous que les aliments respectent les normes de sécurité les plus strictes, tout en gardant une vue d'ensemble sur les opérations.",
    icon: Smartphone,
    gradient: "from-violet-500 to-purple-500",
    pattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
  },
  {
    title: "Intelligence artificielle",
    description:
      "Notre solution d'IA avancée analyse les composants des aliments pour garantir leur sécurité. Grâce à des algorithmes de pointe, nous pouvons détecter les contaminants, évaluer les valeurs nutritionnelles et assurer la conformité aux normes de sécurité alimentaire. Protégez les consommateurs et maintenez la qualité des produits avec notre technologie innovante.",
    icon: CurlyBraces,
    gradient: "from-fuchsia-500 to-purple-600",
    pattern: "radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.1) 0%, transparent 50%)",
  },
  {
    title: "Interface web",
    description:
      "Grâce à notre plateforme web, vous aurez toutes les informations par rapport à notre application.  Notre interface intuitive vous permet de prendre des décisions éclairées rapidement et efficacement.",
    icon: Monitor,
    gradient: "from-purple-500 to-indigo-500",
    pattern: "radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)",
  },
]


export const ServiceSolution= () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  return (
    <section
      className="w-full py-12 md:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.2}}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: `linear-gradient(to bottom right, ${solution.gradient})`,
                }}
              />
              <div
                className="relative h-full overflow-hidden rounded-3xl border border-purple-100/20 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-purple-500/10 dark:border-purple-900/30 dark:bg-gray-800/50">
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{backgroundImage: solution.pattern}}
                />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <motion.div
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      className={`rounded-2xl bg-secondary p-3`}
                    >
                      <solution.icon className="h-8 w-8 text-white"/>
                    </motion.div>
                    <motion.div
                      animate={{scale: [1, 1.2, 1]}}
                      transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10"
                    >
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-500"/>
                    </motion.div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                  <AnimatePresence>
                    {expandedIndex === index ? (
                      <motion.p
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        className="text-sm leading-relaxed text-gray-900 dark:text-muted-foreground"
                      >
                        {solution.description}
                      </motion.p>
                    ) : (
                      <motion.p
                        initial={{opacity: 1, height: "auto"}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        className="text-sm leading-relaxed text-gray-900 dark:text-muted-foreground line-clamp-2"
                      >
                        {solution.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="mt-4 flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    {expandedIndex === index ? "Voir moins" : "En savoir plus"}
                    <ChevronRight className="ml-1 h-4 w-4"/>
                  </motion.button>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

