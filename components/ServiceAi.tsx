


import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {AnimatePresence, motion} from "framer-motion";
import {Separator} from "@/components/ui/separator";
import {AlertTriangle, BarChart2, Shield, CurlyBraces, ChevronRight} from "lucide-react";
import {useState} from "react";
interface Feature {
  icon: any; // Remplace `any` par le type spécifique si disponible
  title: string;
  description: string;
  color:string;
}

const human = "/scan.mp4";
interface FeatureItemProps {
  feature: Feature;
}

const features: Feature[] =[
  {
    title: 'Détection des Contaminants et corps étrangers',
    description: "L'IA peut analyser les données provenant des scans des aliments pour identifier la présence de contaminants tels que des pesticides, des métaux lourds ou des agents pathogènes. Grâce à des algorithmes avancés, elle peut détecter des traces qui pourraient échapper aux méthodes d'analyse traditionnelles.",
    icon: AlertTriangle,
    color: 'from-red-200 to-orange-300'
  },
  {
    title: 'Evaluation des Valeurs Nutritionnelles',
    description:
      "L'IA peut fournir des évaluations précises des valeurs nutritionnelles des aliments en analysant leur composition. Cela permet non seulement de vérifier la qualité nutritionnelle des produits, mais aussi de conseiller les consommateurs sur des choix alimentaires plus sains en fonction de leurs besoins spécifiques.",
    icon: BarChart2,
    color: 'from-green-200 to-emerald-300'
  },
  {
    title: 'Conformité aux Normes de Sécurité Alimentaire',
    description:
      "En utilisant des modèles d'apprentissage automatique, l'IA peut comparer les résultats des tests alimentaires aux normes de sécurité en vigueur. Cela aide à garantir que les produits respectent les régulations et les standards de qualité, réduisant ainsi le risque de non-conformité.",
    icon: Shield,
    color: 'from-blue-400 to-indigo-300'
  },
  {
    title: 'Prédiction et Prévention',
    description:
      "L'IA peut analyser les tendances et les données historiques pour prédire d'éventuels problèmes de sécurité alimentaire avant qu'ils ne surviennent. Par exemple, elle peut identifier des schémas récurrents de contamination ou de déviation par rapport aux normes, permettant une intervention précoce et proactive pour éviter des crises potentielles.",
    icon: CurlyBraces,
    color: 'from-purple-400 to-pink-300'
  }
]


  const FeatureItem = ({ feature }: { feature: Feature }) => (
    <Card className="relative  mb-5 ml-4 mr-4 z-10 md:p-10 dark:bg-muted shadow-lg rounded-lg">
      <CardHeader className="flex items-center mb-6">
        <div className="h-16 w-16 text-3xl mr-6">
          {/* Ajoutez l'icône ici */}
          {/* Exemple: <FontAwesomeIcon icon={feature.icon} /> */}
        </div>
        <div>
          <CardTitle className="text-2xl text-greenSmart font-bold mb-4">{feature.title}</CardTitle>

        </div>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <CardDescription className="opacity-70">{feature.description}</CardDescription>
      </CardContent>
    </Card>
  );




export const ServiceAi = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  return (
    <section
      className="w-full py-12 md:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.2}}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: `linear-gradient(to bottom right, ${feature.color})`,
                }}
              />
              <div
                className="relative h-full overflow-hidden rounded-3xl border border-purple-100/20 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-purple-500/10 dark:border-purple-900/30 dark:bg-gray-800/50">
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{backgroundImage: feature.color}}
                />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <motion.div
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      className={`rounded-2xl bg-gradient-to-br ${feature.color} p-3`}
                    >
                      <feature.icon className="h-8 w-8 text-white"/>
                    </motion.div>
                    <motion.div
                      animate={{scale: [1, 1.2, 1]}}
                      transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10"
                    >
                      <div className={`h-6 w-6 rounded-full bg-gradient-to-br ${feature.color}`}/>
                    </motion.div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <AnimatePresence>
                    {expandedIndex === index ? (
                      <motion.p
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                      >
                        {feature.description}
                      </motion.p>
                    ) : (
                      <motion.p
                        initial={{opacity: 1, height: "auto"}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-2"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="mt-4 flex items-center text-sm font-medium text-secondary hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    {expandedIndex === index ? "Voir moins" : "En savoir plus"}
                    <ChevronRight className="ml-1 h-4 w-4"/>
                  </motion.button>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

