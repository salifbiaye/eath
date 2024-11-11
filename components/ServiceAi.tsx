


import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import { motion } from "framer-motion";
import {Separator} from "@/components/ui/separator";
import {AlertTriangle, BarChart2, Shield,CurlyBraces} from "lucide-react";
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
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    title: 'Evaluation des Valeurs Nutritionnelles',
    description:
      "L'IA peut fournir des évaluations précises des valeurs nutritionnelles des aliments en analysant leur composition. Cela permet non seulement de vérifier la qualité nutritionnelle des produits, mais aussi de conseiller les consommateurs sur des choix alimentaires plus sains en fonction de leurs besoins spécifiques.",
    icon: BarChart2,
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Conformité aux Normes de Sécurité Alimentaire',
    description:
      "En utilisant des modèles d'apprentissage automatique, l'IA peut comparer les résultats des tests alimentaires aux normes de sécurité en vigueur. Cela aide à garantir que les produits respectent les régulations et les standards de qualité, réduisant ainsi le risque de non-conformité.",
    icon: Shield,
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    title: 'Prédiction et Prévention',
    description:
      "L'IA peut analyser les tendances et les données historiques pour prédire d'éventuels problèmes de sécurité alimentaire avant qu'ils ne surviennent. Par exemple, elle peut identifier des schémas récurrents de contamination ou de déviation par rapport aux normes, permettant une intervention précoce et proactive pour éviter des crises potentielles.",
    icon: CurlyBraces,
    color: 'from-purple-500/20 to-pink-500/20'
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
  return (
    <div className="bg-background  text-foreground ">

      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          <div className="w-full">
            <div className="xl:ml-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 ,scale:0.9}}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group relative"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-foreground/10 bg-gray-100  dark:bg-gray-900 transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      />
                      <div className="absolute inset-0 backdrop-blur-[2px]" />
                      <div className="relative h-full p-8">
                        <div className="flex items-center gap-4">
                          <div className={`rounded-xl bg-gradient-to-br ${feature.color} p-3 backdrop-blur-sm`}>
                            <feature.icon className={`h-6 w-6  text-foreground`} />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-foreground">
                          {feature.description}
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-32" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

